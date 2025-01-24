import { environmentalImpacts } from "@/utils/data";
import { getType } from "@/utils/localSave";
import { useIsFocused } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "tamagui";

const Index = () => {
  const [data, setData] = useState<any>([]);
  const isFocused = useIsFocused();
  const { type } = useLocalSearchParams();

  // Extract and format type
  const formattedType = type?.toString().split("/").pop();

  useEffect(() => {
    if (isFocused && formattedType) {
      const loadSavedType = async () => {
        const savedType = await getType();
        if (savedType) {
          setData(environmentalImpacts.filter(
            (impact) => impact.type === savedType
          ));
        }
      };

      loadSavedType()
    }
  }, [formattedType, isFocused]);

  console.log("isFocused:", isFocused);
console.log("formattedType:", formattedType);
console.log("filteredData:", data);


  return (
    <View flex={1} backgroundColor="white">
      <View marginHorizontal={20}>
        <Text fontSize={20} paddingVertical={20}>
          What is {data[0]?.type || "unknown"}?
        </Text>
        <Text fontSize={15} lineHeight={30}>
          {data[0]?.description || "No description available for this type."}
        </Text>
      </View>
    </View>
  );
};

export default Index;
