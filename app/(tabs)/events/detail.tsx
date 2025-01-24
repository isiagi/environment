import { IconSymbol } from "@/components/ui/IconSymbol";
import { Button, Image, Text, View } from "tamagui";

export default function Detail() {
  return (
    <View flex={1} backgroundColor={"white"}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View paddingHorizontal={20}>
        <Text fontSize={20} fontWeight="bold" paddingVertical={20}>
          The forests and climate change
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque in
          dolorum nisi aut vero voluptates rem quibusdam possimus. Officia
          eveniet facere a nisi illum deleniti! Incidunt optio maxime provident!
        </Text>

        <View marginTop={20} flexDirection="row">
          <View
            padding={4}
            marginRight={10}
            backgroundColor={"#f2f2f2"}
            width={50}
            justifyContent="center"
            alignItems="center"
          >
            <IconSymbol size={32} name="book.fill" color={"black"} />
          </View>
          <View>
            <Text>Mon, Feb 27, 3:00 PM</Text>
            <Text>Online</Text>
            <Text>Zoom</Text>
          </View>
        </View>

        <View marginTop={20}>
          <Button borderRadius={20}>Add to Calendar</Button>
        </View>
      </View>
    </View>
  );
}
