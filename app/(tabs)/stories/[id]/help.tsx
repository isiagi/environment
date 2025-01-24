import { environmentalImpacts } from "@/utils/data";
import { getType } from "@/utils/localSave";
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "tamagui";

const Help = () => {
  const [data, setData] = useState<any>([]);
  const [filter, setFilter] = useState("");
  const isFocused = useIsFocused();
  const { type } = useLocalSearchParams();

  // // Extract and format type
  // const formattedType = type?.toString().split("/").pop();

  useEffect(() => {
    if (isFocused) {
      const loadSavedType = async () => {
        const savedType = await getType();
        if (savedType) {
          setData(
            environmentalImpacts.filter((impact) => impact.type === savedType)
          );
          setFilter(savedType);
        }
      };

      loadSavedType();
    }
  }, [isFocused]);
  return (
    <View flex={1} backgroundColor={"white"}>
      <ScrollView flex={1}>
        <View marginHorizontal={20}>
          <Text fontSize={22} marginVertical={20}>
            How to help with {filter}
          </Text>
          <View>
            {data[0]?.solutions?.map((item: any, index: any) => (
              <View>
                <Text key={index} fontSize={18}>
                  {item.text}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  alt="img"
                  style={{ width: "100%", height: 200 }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;
