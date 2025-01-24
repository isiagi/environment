import { Button, Image, Progress, Text, View, XStack, YStack } from "tamagui";

export default function Rewards() {
  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        <Text
          fontSize={22}
          color="black"
          textAlign="center"
          marginBottom={20}
          fontWeight="bold"
        >
          Rewards
        </Text>

        <View>
          <Text fontSize={18} fontWeight={"500"}>
            Your Points
          </Text>
          <XStack
            justifyContent="space-between"
            marginBottom={20}
            marginTop={10}
          >
            <YStack>
              <Text>Total Points</Text>
              <Text>500 Points</Text>
            </YStack>
            <Button>View Details</Button>
          </XStack>
        </View>

        <View>
          <Text fontSize={18} fontWeight={"500"}>
            Next Level
          </Text>
          <YStack gap={10} marginTop={10}>
            <Progress value={40}>
              <Progress.Indicator animation="bouncy" />
            </Progress>
            <Text>200/400</Text>
          </YStack>
        </View>

        <View marginTop={25}>
          <Text fontSize={18} fontWeight={"500"}>
            Badges
          </Text>
          <Text marginTop={10} marginBottom={20}>
            Complete 5 Tasks
          </Text>
          <View>
            <XStack gap={10} justifyContent="space-between">
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
              />

              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
              />

              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/badge-with-award-trophy_23-2148889550.jpg?w=740",
                }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
              />
            </XStack>
          </View>
        </View>
        <View marginTop={30}>
          <Text fontSize={18} fontWeight={"500"}>
            Earn Points
          </Text>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text>Recycle</Text>
            <Button>Start</Button>
          </XStack>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text>Plant Trees</Text>
            <Button>Start</Button>
          </XStack>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={15}
          >
            <Text>Save Energy</Text>
            <Button>Start</Button>
          </XStack>
          s
        </View>
      </View>
    </View>
  );
}
