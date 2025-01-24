import { Image, Text, View, XStack } from "tamagui";

export default function MachineScreen() {
  return (
    <View flex={1} backgroundColor={"white"} marginTop={60}>
      <View marginHorizontal={20}>
        <Text
          fontSize={20}
          fontWeight="bold"
          paddingVertical={20}
          color="black"
        >
          The Climate Time Machine
        </Text>
        <Text>
          Get ready to check climate change effect with Before and After images
        </Text>

        <View marginVertical={20}>
          <XStack justifyContent="space-between" marginBottom={20}>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text fontSize={18} fontWeight={"500"} marginVertical={10}>
                Before
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text fontSize={18} fontWeight={"500"} marginVertical={10}>
                After
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
          </XStack>

          <XStack justifyContent="space-between">
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text fontSize={18} fontWeight={"500"} marginVertical={10}>
                Before
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text fontSize={18} fontWeight={"500"} marginVertical={10}>
                After
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
          </XStack>
        </View>
      </View>
    </View>
  );
}
