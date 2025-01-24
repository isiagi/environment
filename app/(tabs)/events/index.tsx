import { useRouter } from "expo-router";
import { Image, Input, Text, View, XStack, YStack } from "tamagui";

export default function Events() {
  const router = useRouter();
  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={20} marginHorizontal={10}>
        <Text
          fontSize={20}
          fontWeight="bold"
          paddingVertical={20}
          color="black"
          textAlign="center"
        >
          Events
        </Text>

        <Input placeholder="search events..." />
      </View>
      <View>
        <Text
          marginHorizontal={20}
          fontSize={18}
          fontWeight="bold"
          marginVertical={20}
        >
          Upcoming Events
        </Text>

        <View marginHorizontal={20}>
          <YStack gap={40}>
            <XStack gap={10} onPress={() => router.push("/events/detail")}>
              <Image
                source={{
                  uri: "https://loveugandafoundation.org/wp-content/uploads/2022/03/Pink-White-International-Womens-Day-Instagram-Post-1024x1024.png",
                }}
                style={{ width: 110, height: 70, borderRadius: 5 }}
              />
              <View>
                <Text fontSize={16} fontWeight="bold" marginBottom={5}>
                  Woman's Day Event
                </Text>
                <Text fontSize={15}>08/03/2025</Text>
              </View>
            </XStack>

            {/* <XStack gap={10}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: 110, height: 70, borderRadius: 5 }}
              />
              <View>
                <Text fontSize={16} fontWeight="bold" marginBottom={5}>
                  Recycle Day
                </Text>
                <Text>27/05/2023</Text>
              </View>
            </XStack> */}

            {/* <XStack gap={10}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: 110, height: 70, borderRadius: 5 }}
              />
              <View>
                <Text fontSize={16} fontWeight="bold" marginBottom={5}>
                  Go Green
                </Text>
                <Text>27/05/2023</Text>
              </View>
            </XStack> */}
          </YStack>
          <View>
            <Text marginVertical={20} fontSize={18} fontWeight="bold">
              Nearby Events
            </Text>

            <YStack gap={40}>
              <XStack gap={10} onPress={() => router.push("/events/detail")}>
                <Image
                  source={{
                    uri: "https://loveugandafoundation.org/wp-content/uploads/2022/03/Pink-White-International-Womens-Day-Instagram-Post-1024x1024.png",
                  }}
                  style={{ width: 110, height: 70, borderRadius: 5 }}
                />
                <View>
                  <Text fontSize={16} fontWeight="bold" marginBottom={5}>
                    Woman's Day Event
                  </Text>
                  <Text fontSize={15}>08/03/2025</Text>
                </View>
              </XStack>

              {/* <XStack gap={10}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={{ width: 110, height: 70, borderRadius: 5 }}
                />
                <View>
                  <Text fontSize={16} fontWeight="bold" marginBottom={5}>
                    Recycle Day
                  </Text>
                  <Text>27/05/2023</Text>
                </View>
              </XStack> */}
            </YStack>
          </View>
        </View>
      </View>
    </View>
  );
}
