import { Image, Text, View, XStack } from "tamagui";

export default function MachineScreen() {
  return (
    <View flex={1} backgroundColor={"white"} paddingVertical={40}>
      <View marginHorizontal={20}>
        <Text
          fontSize={20}
          fontWeight="bold"
          paddingVertical={20}
          color="$green9"
        >
          The Climate Time Machine
        </Text>
        <Text color={"$gray11"}>
          Get ready to check climate change effect with Before and After images
        </Text>

        <View marginVertical={20}>
          <XStack justifyContent="space-between" marginBottom={20}>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text
                fontSize={18}
                textAlign="center"
                fontWeight={"500"}
                marginVertical={10}
                color="$green9"
              >
                Before
              </Text>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1602183245419-82ae4ff801d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoaWNrJTIwZm9yZXN0fGVufDB8fDB8fHww",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text
                fontSize={18}
                fontWeight={"500"}
                marginVertical={10}
                textAlign="center"
                color={"$yellow10"}
              >
                After
              </Text>
              <Image
                source={{
                  uri: "https://rainforestjournalismfund.org/sites/default/files/styles/orig_optimized/public/inline-images/FOREST-SET-ABLAZE-AMIDST-DEFORESTATION-1920x1080.jpg.webp?itok=2299o9vG",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
          </XStack>

          <XStack justifyContent="space-between">
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text
                fontSize={18}
                textAlign="center"
                color={"$green9"}
                fontWeight={"500"}
                marginVertical={10}
              >
                Before
              </Text>
              <Image
                source={{
                  uri: "https://imgix.brilliant-uganda.com/EU-Entebbe-Shoebill-Mabamba-Swamp-2.JPG?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=720&h=0&q=60&cs=srgb",
                }}
                style={{ width: "100%", height: 200 }}
              />
            </View>
            <View backgroundColor={"#f2f2f2"} width={"48%"}>
              <Text
                fontSize={18}
                fontWeight={"500"}
                textAlign="center"
                marginVertical={10}
                color="$yellow10"
              >
                After
              </Text>
              <Image
                source={{
                  uri: "https://chitra-production.s3.eu-west-2.amazonaws.com/production/images/4d7/c92682e3-1662-47f3-ba28-6279b44c74d7/c79/efa9aa6a-55ba-4fdd-a949-c8cd98ec4c79/WETLANDS-703-422.jpg",
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
