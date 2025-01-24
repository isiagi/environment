import authInstance from "@/utils/axios/authApi";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { Button, Text, View, XStack, YStack } from "tamagui";

interface Task {
  id: number;
  name: string;
  points: number;
  task_type: "daily" | "weekly";
  is_completed?: boolean;
}

export default function Habits() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     // Fetch tasks
  //     const tasksResponse = await authInstance.get("task/");

  //     // Fetch completed tasks
  //     const completedResponse = await authInstance.get("user-tasks/");

  //     // Extract completed task IDs
  //     const completedIds = completedResponse.data.map((task: any) => task.task);

  //     // Mark tasks as completed
  //     const updatedTasks = tasksResponse.data.map((task: Task) => ({
  //       ...task,
  //       is_completed: completedIds.includes(task.id),
  //     }));

  //     setTasks(updatedTasks);
  //     setCompletedTaskIds(completedIds);
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert("Error", "Failed to load tasks");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useFocusEffect(
    useCallback(() => {
      // Function to refresh data
      const fetchData = async () => {
        console.log("rtd");

        try {
          setLoading(true);
          // Fetch tasks
          const tasksResponse = await authInstance.get("task/");

          console.log("tasksResponse", tasksResponse.data);

          // Fetch completed tasks
          const completedResponse = await authInstance.get("user-tasks/");
          console.log("completedResponse", completedResponse.data);

          // Extract completed task IDs
          const completedIds = completedResponse.data.filter(
            (task: any) => task.is_completed
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
          Alert.alert("Error", "Failed to load tasks");
        } finally {
          setLoading(false);
        }
      };

      fetchData();

      // Optional: Cleanup if needed (e.g., cancel ongoing fetches)
      return () => {
        console.log("Habit screen unfocused. Cleanup if necessary.");
      };
    }, []) // Dependency array: Add any state/data the effect depends on
  );

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const toggleTaskCompletion = async (taskId: number) => {
    try {
      const task = tasks.find((t) => t.id === taskId);
      if (!task) return;

      if (task.is_completed) {
        // Find the completed task ID from `completedTaskIds`
        const completedTaskId = completedTaskIds.find((id) => id === taskId);
        if (!completedTaskId) {
          throw new Error("Completed task ID not found for uncompletion");
        }

        // Uncomplete task using the completed task's ID
        await authInstance.post(
          `user-tasks/${completedTaskId}/uncomplete_task/`
        );

        // Update local state
        const updatedTasks = tasks.map((t) =>
          t.id === taskId ? { ...t, is_completed: false } : t
        );
        setTasks(updatedTasks);
        setCompletedTaskIds(completedTaskIds.filter((id) => id !== taskId));
      } else {
        // Complete task using the task ID
        await authInstance.post(`task/${taskId}/complete_task/`);

        // Update local state
        const updatedTasks = tasks.map((t) =>
          t.id === taskId ? { ...t, is_completed: true } : t
        );
        setTasks(updatedTasks);
        setCompletedTaskIds([...completedTaskIds, taskId]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to update task");
    }
  };

  const renderTaskSection = (taskType: "daily" | "weekly") => {
    const filteredTasks = tasks.filter((task) => task.task_type === taskType);

    return (
      <View>
        <Text
          fontSize={22}
          color="black"
          marginBottom={20}
          marginTop={taskType === "weekly" ? 40 : 0}
          fontWeight="bold"
        >
          {taskType === "daily" ? "Today" : "This Week"}
        </Text>

        {filteredTasks.length === 0 ? (
          <Text textAlign="center" color="$gray10">
            No {taskType} tasks available
          </Text>
        ) : (
          filteredTasks.map((item) => (
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
                  onPress={() => toggleTaskCompletion(item.id)}
                  backgroundColor={item.is_completed ? "$green6" : "$blue6"}
                >
                  {item.is_completed ? "Completed" : "Complete"}
                </Button>
              </View>
            </XStack>
          ))
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        {renderTaskSection("daily")}
        {renderTaskSection("weekly")}
      </View>
    </View>
  );
}
