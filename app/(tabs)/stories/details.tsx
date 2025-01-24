import { Image, Text, View } from "tamagui";

export default function Details() {
  return (
    <View flex={1} backgroundColor={"white"}>
      <Text fontSize={20} fontWeight="bold" paddingVertical={20} color="black">
        The impact of carbon emissions
      </Text>

      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View>
        <Text marginTop={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque in
          dolorum nisi aut vero voluptates rem quibusdam possimus. Officia
          eveniet facere a nisi illum deleniti! Incidunt optio maxime provident!
          Veritatis itaque doloribus voluptates officia doloremque consequatur
          eum iste sequi accusantium labore facilis, optio natus ab repudiandae,
          expedita excepturi obcaecati et deleniti? Cum atque, iure eaque libero
          fugiat aperiam dolor.
        </Text>

        <Text marginTop={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque in
          dolorum nisi aut vero voluptates rem quibusdam possimus. Officia
          eveniet facere a nisi illum deleniti! Incidunt optio maxime provident!
          Veritatis itaque doloribus voluptates officia doloremque consequatur
          eum iste sequi accusantium labore facilis, optio natus ab repudiandae,
          expedita excepturi obcaecati et deleniti? Cum atque, iure eaque libero
          fugiat aperiam dolor.
        </Text>
      </View>
    </View>
  );
}
