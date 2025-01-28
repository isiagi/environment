import { Image, StyleSheet, Platform, Alert } from "react-native";

import { HelloWave } from "@/components/HelloWave";

import { Button, Popover, ScrollView, Text, View, YStack } from "tamagui";

import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import authInstance from "@/utils/axios/authApi";

const localImages = [
  require('@/assets/images/img1.jpeg'),
  require('@/assets/images/img2.jpeg'), 
  require('@/assets/images/img3.jpeg'),
  require('@/assets/images/img4.jpeg'),
  require('@/assets/images/img1.jpeg'),
  require('@/assets/images/img2.jpeg')
];

export default function HomeScreen() {
  const router = useRouter();
  const useAuth = useContext(AuthContext);

  return (
    <ScrollView
      flex={1}
      paddingTop={Platform.OS === "ios" ? 50 : 50}
      backgroundColor="white"
    >
      <StatusBar style="dark" />
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal={20}
      >
        <View>
          <Popover placement="bottom">
            <Popover.Trigger>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8970.jpg?t=st=1737801301~exp=1737804901~hmac=dd77d54792bbb74adea093e88b12d48023e3883cb04bc583b0108b8ecc8ad93b&w=740",
                }}
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "center", 
                  borderRadius: 100,
                }}
              />
            </Popover.Trigger>

            <Popover.Content
              borderWidth={1}
              borderColor="$gray5"
              enterStyle={{ y: -10, opacity: 0 }}
              exitStyle={{ y: -10, opacity: 0 }}
              marginLeft={15}
              marginTop={5}
              elevate
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
            >
              <Popover.Arrow borderWidth={1} borderColor="$gray5" />
              
              <YStack space="$3" >
                <Button
                  onPress={() => {
                    Alert.alert(
                      "Logout",
                      "Are you sure you want to logout?",
                      [
                        {
                          text: "Cancel",
                          style: "cancel"
                        },
                        {
                          text: "Logout",
                          onPress: async () => {
                            // Add logout logic here
                            try {
                              await authInstance.post('users/auth/logout/')
                              useAuth.logout()
                            router.replace("/(auth)/Login");
                            } catch (error) {
                              console.log(error);
                              
                            }
                            
                          }
                        }
                      ]
                    );
                  }}
                  backgroundColor="$red9"
                  color="white"
                >
                  Logout
                </Button>
              </YStack>
            </Popover.Content>
          </Popover>
        </View>
        <View flexDirection="row" alignItems="center">
          <Text
            fontSize={15}
            width={200}
            textAlign="center"
            fontWeight={"bold"}
            color={"$green9"}
          >
            Dynamic Climate Change Advocates.
          </Text>
          <View>
            <HelloWave />
          </View>
          {/* <Text fontSize={20} fontWeight={"bold"}>
            Welcome Back
          </Text> */}
        </View>
      </View>
      <View backgroundColor="white" display="flex" marginTop={20}>
        {/* 
      <Text fontSize={19} alignSelf='center' paddingVertical={14} color="black">Welcome</Text> */}
        {/* <Text
          fontSize={19}
          alignSelf="center"
          textAlign="center"
          color="black"
          fontWeight="bold"
        >
          Dynamic Climate Change Advocates.
        </Text> */}
      </View>

      <View>
        <Image
          source={require('@/assets/images/img2.jpeg')}
          style={{
            width: "95%",
            height: 220,
            alignSelf: "center",
            borderRadius: 10,
            objectFit: 'cover',
            
          }}
        />
      </View>

      {/* <View marginTop={40} flex={1} backgroundColor="white">
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1439153283/photo/answer-sheets-with-pencil-drawing-fill-to-select-choice-education-concept.jpg?s=1024x1024&w=is&k=20&c=4tA7_mqWBQJUDtb-c3r5AdzSTV325Zw6lkc5QfvfmfI=",
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
      </View> */}

      {/* <View
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
      </View> */}
      <View marginHorizontal={15}>
        <Text
          fontSize={17}
          paddingVertical={15}
          fontWeight={"bold"}
          color={"$yellow8"}
        >
          Own Banda Local Environment Pains
        </Text>
      </View>
      <View>
        <ScrollView horizontal height={190}>
          {localImages.map((image, index) => (
            <View key={index} paddingHorizontal={10} flex={1}>
              <Image
                source={image}
                style={{ width: 300, height: "100%", borderRadius: 10 }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View marginHorizontal={15}>
        <Text
          fontSize={17}
          paddingVertical={15}
          fontWeight={"bold"}
          color={"$green9"}
        >
          Get Started On Your Envirnmental Journey
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
                  uri: "https://media.istockphoto.com/id/1439153283/photo/answer-sheets-with-pencil-drawing-fill-to-select-choice-education-concept.jpg?s=1024x1024&w=is&k=20&c=4tA7_mqWBQJUDtb-c3r5AdzSTV325Zw6lkc5QfvfmfI=",
                }}
                style={{ width: "100%", height: 120, borderRadius: 10 }}
              />
              <Text
                fontSize={15}
                fontWeight={"500"}
                marginTop={10}
                textAlign="center"
                marginBottom={10}
                paddingVertical={10}
                paddingHorizontal={5}
                backgroundColor={"$green9"}
                color={"white"}
                borderRadius={50}
              >
                Score Habits Points
              </Text>
            </View>

            <View
              width="48%"
              marginBottom={15}
              onPress={() => router.push("/machine")}
            >
              <Image
                source={{
                  uri: "https://preview.redd.it/chatgpts-answers-on-how-to-build-a-time-machine-how-would-v0-1km5cp3uxexb1.png?width=1024&format=png&auto=webp&s=afaa683a8b3ada2c4e1aa1872deb73afc8b743e3",
                }}
                style={{ width: "100%", height: 120, borderRadius: 10 }}
              />
              <Text
                fontSize={15}
                fontWeight={"500"}
                marginTop={10}
                textAlign="center"
                marginBottom={10}
                paddingVertical={10}
                paddingHorizontal={5}
                backgroundColor={"$green9"}
                color={"white"}
                borderRadius={50}
              >
                View Time Machine
              </Text>
            </View>

            {/* <View
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
            </View> */}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
