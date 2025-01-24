import { Image, StyleSheet, Platform, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, Text, View } from "tamagui";
import { green } from "react-native-reanimated/lib/typescript/Colors";
import { Navigator, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View flex={1} marginTop={60} backgroundColor="white">
      <View backgroundColor="white" display="flex" marginTop={20}>
        {/* 
      <Text fontSize={19} alignSelf='center' paddingVertical={14} color="black">Welcome</Text> */}
        <Text
          fontSize={19}
          alignSelf="center"
          textAlign="center"
          color="black"
          fontWeight="bold"
        >
          Team Banda - Dynamic Climate Change Advocates.
        </Text>
      </View>

      <View marginTop={40} backgroundColor="white">
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/corporate-social-responsibility-concept_23-2148920385.jpg?t=st=1737585882~exp=1737589482~hmac=b32110b5460b550e1b0c7b91021aebf7fb0477010550f411c9b62d54ced4691a&w=740",
          }}
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
            borderRadius: 100,
          }}
        />
        <Text textAlign="center" marginTop={10}>
          Get Started on your envirnmental journey
        </Text>
      </View>

      <View
        flex={1}
        paddingVertical={30}
        justifyContent="center"
        marginLeft={15}
      >
        <Text fontSize={20} fontWeight={500}>
          Features
        </Text>
        <Text paddingVertical={15} fontSize={15}>
          We have gotten some features to get you below.
        </Text>
        <Text
          padding={7}
          backgroundColor={"green"}
          textAlign="center"
          color={"white"}
          width={140}
          borderRadius={50}
        >
          Select Below{" "}
        </Text>
      </View>

      <View backgroundColor="white">
        <ScrollView>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            paddingHorizontal={10}
          >
            <View
              width="48%"
              marginBottom={15}
              onPress={() => router.push("/habit")}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/corporate-social-responsibility-concept_23-2148920385.jpg?t=st=1737585882~exp=1737589482~hmac=b32110b5460b550e1b0c7b91021aebf7fb0477010550f411c9b62d54ced4691a&w=740",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text fontSize={18} fontWeight={"400"} textAlign="center">
                Habits Scores
              </Text>
            </View>

            <View
              width="48%"
              marginBottom={15}
              onPress={() => router.push("/machine")}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/corporate-social-responsibility-concept_23-2148920385.jpg?t=st=1737585882~exp=1737589482~hmac=b32110b5460b550e1b0c7b91021aebf7fb0477010550f411c9b62d54ced4691a&w=740",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text fontSize={18} fontWeight={"400"} textAlign="center">
                Time Machine
              </Text>
            </View>

            <View
              width="48%"
              marginBottom={15}
              onPress={() => Alert.alert("hghgj")}
            >
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/corporate-social-responsibility-concept_23-2148920385.jpg?t=st=1737585882~exp=1737589482~hmac=b32110b5460b550e1b0c7b91021aebf7fb0477010550f411c9b62d54ced4691a&w=740",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text fontSize={18} fontWeight={"400"} textAlign="center">
                Virtual Events
              </Text>
            </View>

            <View width="48%" marginBottom={15}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/corporate-social-responsibility-concept_23-2148920385.jpg?t=st=1737585882~exp=1737589482~hmac=b32110b5460b550e1b0c7b91021aebf7fb0477010550f411c9b62d54ced4691a&w=740",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text fontSize={18} fontWeight={"400"} textAlign="center">
                Interactive Stories
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
