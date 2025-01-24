import { Button, Text, View, XStack, YStack } from "tamagui";

export default function Habits() {
  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={20}>
        <Text fontSize={22} color="black" marginBottom={20} fontWeight="bold">
          Today
        </Text>

        <View>
          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Turn Off Lights
              </Text>
              <Text>5 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>

          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Water Plants
              </Text>
              <Text>5 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>

          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Recycle
              </Text>
              <Text>5 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>

          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Plant Trees
              </Text>
              <Text>5 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>
        </View>

        <View>
          <Text
            fontSize={22}
            color="black"
            marginBottom={40}
            marginTop={40}
            fontWeight="bold"
          >
            This Week
          </Text>
        </View>

        <View>
          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Take shorter showers
              </Text>
              <Text>10 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>

          <XStack justifyContent="space-between" marginBottom={20}>
            <YStack>
              <Text fontSize={18} fontWeight={"400"}>
                Use less water
              </Text>
              <Text>10 points</Text>
            </YStack>

            <View>
              <Button>Complete</Button>
            </View>
          </XStack>
        </View>
      </View>
    </View>
  );
}
