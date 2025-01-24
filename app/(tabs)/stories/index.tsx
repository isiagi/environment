import { saveType } from "@/utils/localSave";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { Image, ScrollView, Text, View, YStack } from "tamagui";

export default function Stories() {
  const router = useRouter();
  const stories = [
    {
      id: "carbon-emissions",
      title: "The impact of carbon emissions",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "/stories/Carbon-Emissions"
    },
    {
      id: "deforestation", 
      title: "The impact of deforestation",
      image: "https://res.cloudinary.com/djgesv2ry/image/upload/v1720536929/0924-OZOKA_yntpdx.jpg",
      link: "/stories/Deforestation"
    }
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
            <YStack width={"100%"} onPress={() => {
              saveType(item.link)
              router.push(`/stories/type?type=${item.link}`)
              }} marginBottom={30}
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
