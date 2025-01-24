import AsyncStorage from "@react-native-async-storage/async-storage";

const saveType = async (type:any) => {
  const formattedType = type?.toString().split("/").pop();

  await AsyncStorage.setItem("selectedType", formattedType);
};

const getType = async () => {
  const type = await AsyncStorage.getItem("selectedType");
  return type;
};


export {
  saveType,
  getType
}