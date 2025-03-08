import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Button, Text, View, XStack, YStack, Spinner } from "tamagui";
import authInstance from "@/utils/axios/authApi";

interface Task {
  id: number;
  name: string;
  points: number;
  is_completed?: boolean;
  task_type: 'daily' | 'weekly';
}

export default function UserTasks() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Fetch all tasks
      const tasksResponse = await authInstance.get("task/");

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

      setAllTasks(updatedTasks);
      // Initial filter for daily tasks
      setFilteredTasks(updatedTasks.filter((task: { task_type: string; }) => task.task_type === 'daily'));
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
    setFilteredTasks(allTasks.filter(task => task.task_type === activeTab));
  }, [activeTab, allTasks]);

  return (
    <View flex={1} backgroundColor="white" paddingTop={70}>
      <XStack paddingHorizontal={20} gap={10} marginBottom={20}>
        <Button
          flex={1}
          backgroundColor={activeTab === 'daily' ? '$green9' : '$gray4'} 
          onPress={() => setActiveTab('daily')}
        >
          <Text color={activeTab === 'daily' ? 'white' : '$gray11'}>Daily Tasks</Text>
        </Button>
        <Button
          flex={1}
          backgroundColor={activeTab === 'weekly' ? '$green9' : '$gray4'}
          onPress={() => setActiveTab('weekly')}
        >
          <Text color={activeTab === 'weekly' ? 'white' : '$gray11'}>Weekly Tasks</Text>
        </Button>
      </XStack>

      {isLoading ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <Spinner size="large" color="$green9" />
        </View>
      ) : (
        <ScrollView>
          <YStack paddingHorizontal={20} space={15}>
            {filteredTasks.map((task) => (
              <View 
                key={task.id}
                backgroundColor="$gray2"
                padding={15}
                borderRadius={10}
              >
                <XStack justifyContent="space-between" alignItems="center">
                  <YStack>
                    <Text fontSize={16} color="$black10">{task.name}</Text>
                    <Text fontSize={14} color="$gray11">{task.points} points</Text>
                  </YStack>
                  {task.is_completed ? (
                    <Text color="$green9">Completed ✓</Text>
                  ) : (
                    <XStack alignItems="center" gap={10}>
                      <Text color="$red9">Not Completed</Text>
                      
                    </XStack>
                  )}
                </XStack>
              </View>
            ))}
          </YStack>
        </ScrollView>
      )}
    </View>
  );
}