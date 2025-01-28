import authInstance from "@/utils/axios/authApi";
import { useEffect, useState } from "react";
import { Button, Image, Progress, Text, View, XStack, YStack } from "tamagui";
import { useRouter } from "expo-router";

export default function Rewards() {
  const [profile, setProfile] = useState<any>([]);
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tasks
        const profileResponse = await authInstance.get("userprofile/");

        console.log(profileResponse.data);

        setProfile(profileResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        <Text
          fontSize={22}
          color="$green9"
          textAlign="center"
          marginBottom={20}
          fontWeight="bold"
        >
          Rewards
        </Text>

        <View>
          <Text fontSize={18} fontWeight={"500"} color={"$black6"}>
            Your Points
          </Text>
          <XStack
            justifyContent="space-between"
            marginBottom={20}
            marginTop={10}
          >
            <YStack>
              <Text color={"$black8"}>Total Points</Text>
              <Text color={"$green9"}>{profile[0]?.total_points} Points</Text>
            </YStack>
            <Button backgroundColor={"$green8"} color={"white"}>
              View Details
            </Button>
          </XStack>
        </View>

        <View>
          <Text fontSize={18} color={"$black6"} fontWeight={"500"}>
            Next Level
          </Text>
          <YStack gap={10} marginTop={10}>
            <Progress value={40} borderColor={"$green5"}>
              <Progress.Indicator style={{backgroundColor: "green"}}  animation="bouncy" />
            </Progress>
            <Text color={"$black7"}>200/400</Text>
          </YStack>
        </View>

        <View marginTop={25}>
          <Text fontSize={18} color={"$green9"} fontWeight={"500"}>
            Badges
          </Text>
          <Text marginTop={10} marginBottom={20} color={"$black8"}>
            Complete 5 Tasks
          </Text>
          <View>
            <XStack gap={10} justifyContent="space-between">
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />

              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />

              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
            </XStack>
          </View>
        </View>
        <View marginTop={30}>
          <Text fontSize={18} color={"$green9"} fontWeight={"500"}>
            Earn Points
          </Text>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text fontSize={17} fontWeight={600} color={"$black7"}>
              Recycle
            </Text>
            <Button
              onPress={() =>
                route.push({
                  pathname: "/rewards/quiz",
                  params: { type: "recycle" },
                })
              }
              backgroundColor={"$green9"}
              color={"white"}
            >
              Start
            </Button>
          </XStack>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text fontSize={17} fontWeight={600} color={"$black7"}>
              Water Conservation
            </Text>
            <Button
              backgroundColor={"$green9"}
              color={"white"}
              onPress={() =>
                route.push({
                  pathname: "/rewards/quiz",
                  params: { type: "water" },
                })
              }
            >
              Start
            </Button>
          </XStack>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text fontSize={17} fontWeight={600} color={"$black7"}>
              Pollution
            </Text>
            <Button
              backgroundColor={"$green9"}
              color={"white"}
              onPress={() =>
                route.push({
                  pathname: "/rewards/quiz",
                  params: { type: "pollution" },
                })
              }
            >
              Start
            </Button>
          </XStack>

          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text fontSize={17} fontWeight={600} color={"$black7"}>
              Renewable Enegry
            </Text>
            <Button
              backgroundColor={"$green9"}
              color={"white"}
              onPress={() =>
                route.push({
                  pathname: "/rewards/quiz",
                  params: { type: "energy" },
                })
              }
            >
              Start
            </Button>
          </XStack>
        </View>
      </View>
    </View>
  );
}
