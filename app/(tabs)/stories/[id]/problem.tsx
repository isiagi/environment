import { environmentalImpacts } from "@/utils/data";
import { getType } from "@/utils/localSave";
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "tamagui";

const Problem = () => {
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

  console.log("isFocused:", isFocused);
  // console.log("formattedType:", formattedType);
  console.log("filteredData:", data);

  return (
    <View flex={1} backgroundColor={"white"}>
      <ScrollView>
        <View marginHorizontal={20}>
          <Text fontSize={22} marginVertical={20}>
            What are the Impacts of {filter}
          </Text>
          <View>
            {data[0]?.impacts?.map((item: any, index: any) => (
              <View key={index} marginBottom={35}>
                <Text
                  key={index}
                  color={"$green9"}
                  fontSize={18}
                  marginBottom={20}
                >
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

export default Problem;
