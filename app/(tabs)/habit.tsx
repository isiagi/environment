import authInstance from "@/utils/axios/authApi";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button, Text, View, XStack, YStack } from "tamagui";

interface Task {
  id: number;
  name: string;
  points: number;
  is_completed?: boolean;
}

export default function Habits() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      // Fetch tasks based on active tab
      const tasksResponse = await authInstance.get(
        activeTab === 'daily' ? "task/" : "task/weekly/"
      );

      // Fetch completed tasks
      const completedResponse = await authInstance.get("user-tasks/");

      // Extract completed task IDs
      const completedIds = completedResponse.data.map(
        (task: any) => task.task
      );

      // Mark tasks as completed
      const updatedTasks = tasksResponse.data.map((task: Task) => ({
        ...task,
        is_completed: completedIds.includes(task.id),
      }));

      setTasks(updatedTasks);
      setCompletedTaskIds(completedIds);
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async (id: number) => {
    try {
      await authInstance.post(`task/${id}/complete_task/`);

      // Update local state
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, is_completed: true } : task
      );

      setTasks(updatedTasks);
      setCompletedTaskIds([...completedTaskIds, id]);

      Alert.alert("Success", "Task completed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        <XStack gap={20} marginBottom={20}>
          <Text 
            fontSize={22} 
            color={activeTab === 'daily' ? "$green9" : "black"} 
            fontWeight="bold"
            onPress={() => setActiveTab('daily')}
          >
            Today's Points
          </Text>
          <Text 
            fontSize={22} 
            color={activeTab === 'weekly' ? "$green9" : "black"} 
            fontWeight="bold"
            onPress={() => setActiveTab('weekly')}
          >
            Weekly Points
          </Text>
        </XStack>

        <View>
          {tasks.map((item) => (
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
                  onPress={() => completeTask(item.id)}
                  disabled={item.is_completed}
                  backgroundColor={item.is_completed ? "$green6" : "$blue6"}
                >
                  {item.is_completed ? "Completed" : "Complete"}
                </Button>
              </View>
            </XStack>
          ))}
        </View>
      </View>
    </View>
  );
}
