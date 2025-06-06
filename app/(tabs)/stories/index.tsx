import { saveType } from "@/utils/localSave";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { Image, Text, View, YStack } from "tamagui";

export default function Stories() {
  const router = useRouter();
  const stories = [
    {
      id: "carbon-emissions",
      title: "The impact of carbon emissions",
      image:
        "https://pbs.twimg.com/media/EkkmnI9X0AAxk6e?format=jpg&name=large",
      link: "/stories/Carbon-Emissions",
    },
    {
      id: "deforestation",
      title: "The impact of deforestation",
      image:
        "https://res.cloudinary.com/djgesv2ry/image/upload/v1720536929/0924-OZOKA_yntpdx.jpg",
      link: "/stories/Deforestation",
    },
  ];
  return (
    <View flex={1} backgroundColor={"white"}>
      <View marginTop={60} paddingHorizontal={10}>
        <Text
          fontSize={22}
          color="black"
          textAlign="center"
          marginBottom={20}
          fontWeight="bold"
        >
          Eco Stories
        </Text>
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <YStack
              width={"100%"}
              onPress={() => {
                saveType(item.link);
                router.push(`/stories/type?type=${item.link}`);
              }}
              marginBottom={30}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={{ width: "100%", height: 170, borderRadius: 10 }}
              />
              <Text fontSize={15} fontWeight={500} marginTop={15}>
                {item.title}
              </Text>
            </YStack>
          )}
        />
      </View>
    </View>
  );
}
