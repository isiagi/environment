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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tasks
        const tasksResponse = await authInstance.get("task/");

        // Fetch completed tasks
        const completedResponse = await authInstance.get("user-tasks/");

        // Extract completed task IDs
        const completedIds = completedResponse.data.map(
          (task: Task) => task.task
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

    fetchData();
  }, []);

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
        <Text fontSize={22} color="black" marginBottom={20} fontWeight="bold">
          Today
        </Text>

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
