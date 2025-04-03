import authInstance from "@/utils/axios/authApi";
import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { Button, Text, View, XStack, YStack, Spinner } from "tamagui";

interface Task {
  id: number;
  name: string;
  points: number;
  is_completed?: boolean;
  task_type: 'daily' | 'weekly';
  created_at?: string;
}

export default function Habits() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Fetch all tasks
      const tasksResponse = await authInstance.get("task/");

      // Fetch completed tasks for current day
      
      const completedResponse = await authInstance.get(`user-tasks/today`);

      // Extract completed task IDs
      const completedIds = completedResponse.data.map(
        (task: any) => task.task
      );

      // Mark tasks as completed
      const updatedTasks = tasksResponse.data.map((task: Task) => ({
        ...task,
        is_completed: completedIds.includes(task.id),
      }));

      setAllTasks(updatedTasks);
      // Initial filter for daily tasks
      setFilteredTasks(updatedTasks.filter((task: Task) => task.task_type === activeTab));
      setCompletedTaskIds(completedIds);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter tasks when tab changes
  useEffect(() => {
    setFilteredTasks(allTasks.filter((task: Task) => task.task_type === activeTab));
  }, [activeTab, allTasks]);

  const completeTask = async (id: number) => {
    try {
      setIsUpdating(true);
      await authInstance.post(`task/${id}/complete_task/`);

      // Update local state
      const updatedTasks = allTasks.map((task) =>
        task.id === id ? { ...task, is_completed: true } : task
      );

      setAllTasks(updatedTasks);
      setCompletedTaskIds([...completedTaskIds, id]);

      Alert.alert("Success", "Task completed successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  const uncompleteTask = async (id: number) => {
    try {
      setIsUpdating(true);
      await authInstance.post(`task/${id}/uncomplete_task/`);

      // Update local state
      const updatedTasks = allTasks.map((task) =>
        task.id === id ? { ...task, is_completed: false } : task
      );

      setAllTasks(updatedTasks);
      setCompletedTaskIds(completedTaskIds.filter(taskId => taskId !== id));

      Alert.alert("Success", "Task uncompleted successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        <XStack gap={20} justifyContent="space-between" marginBottom={20}>
          <Button
            fontSize={15}
            color={activeTab === 'daily' ? "$green9" : "black"}
            fontWeight="bold"
            onPress={() => setActiveTab('daily')}
           
          >
            Today's Points
          </Button>
          <Button
            fontSize={15}
            color={activeTab === 'weekly' ? "$green9" : "black"}
            fontWeight="bold"
            onPress={() => setActiveTab('weekly')}
           
          >
            Weekly Points
          </Button>
        </XStack>

        {isLoading ? (
          <View flex={1} justifyContent="center" alignItems="center">
            <Spinner size="large" color="$green9" />
          </View>
        ) : (
          <ScrollView>
            {filteredTasks.map((item) => (
              <XStack
                key={item.id}
                justifyContent="space-between"
                marginBottom={20}
              >
                <YStack>
                  <Text fontSize={18} fontWeight={"400"}>
                    {item.name}
                  </Text>
                  <Text>{item.points} points</Text>
                </YStack>

                <View>
                  <Button
                    disabled={isUpdating}
                    onPress={() => item.is_completed ? uncompleteTask(item.id) : completeTask(item.id)}
                    backgroundColor={item.is_completed ? "$green6" : "$blue6"}
                  >
                    {isUpdating ? <Spinner color="white" size="small" /> : (item.is_completed ? "Completed" : "Complete")}
                  </Button>
                </View>
              </XStack>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
