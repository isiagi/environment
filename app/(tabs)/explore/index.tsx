
import { Button, Text, View, XStack, YStack } from 'tamagui';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const route = useRouter();
  return (
    <View backgroundColor={"white"} flex={1} paddingHorizontal={20} paddingTop={40}>

<View marginTop={30}>
          <Text fontSize={18} color={"$green9"} fontWeight={"500"}>
            TEST YOUR KNOW!
          </Text>
          <YStack gap={25}>

          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginTop={25}
          >
            <Text fontSize={17} fontWeight={600} color={"$black7"}>
              Recycle
            </Text>
            <Button
              onPress={() =>
                route.push({
                  pathname: "/(tabs)/explore/quiz",
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
                  pathname: "/(tabs)/explore/quiz",
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
                  pathname: "/(tabs)/explore/quiz",
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
                  pathname: "/(tabs)/explore/quiz",
                  params: { type: "energy" },
                })
              }
            >
              Start
            </Button>
          </XStack>
          </YStack>
        </View>

    </View>
  );
}
