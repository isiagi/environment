import { useRouter } from "expo-router";
import instance from "@/utils/axios/baseApi";
import { useContext, useState } from "react";
import { Alert, Pressable } from "react-native";
import {
  Button,
  Form,
  Input,
  Label,
  Spinner,
  Text,
  View,
  YStack,
} from "tamagui";

import { AuthContext } from "@/context/AuthContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  // const { login } = useAuth();

  const route = useRouter();

  // If the user is already logged in, redirect them to the home screen
  if (useAuth.user) {
    route.push("/(tabs)");
  }

  // More robust error handling
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await instance.post("users/auth/login/", {
        username,
        password,
      });

      useAuth.login(response.data);

      // Redirect to the home screen
      route.push("/(tabs)");
    } catch (error: any) {
      console.error("Full error:", error);
      if (error.response) {
        console.error("Server error details:", error.response.data);
        Alert.alert(
          "Login Error",
          error.response.data.message || "Server error"
        );
      } else if (error.request) {
        console.error("Network error:", error.message);
        Alert.alert("Network Error", "No response from server");
      } else {
        console.error("Error:", error.message);
        Alert.alert("Error", "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <View flex={1} backgroundColor={"white"} justifyContent="center">
      <View marginHorizontal={20}>
        <Form>
          <YStack backgroundColor={"$gray1"}>
            <Label
              width={90}
              htmlFor="username"
              color={"$green8"}
              textAlign="center"
            >
              Username
            </Label>
            <Input
              onChangeText={(text) => setUserName(text)}
              size="$5"
              borderWidth={2}
              placeholder="Enter your Username"
            />
          </YStack>

          <YStack backgroundColor={"$gray1"} marginBottom={25}>
            <Label
              width={90}
              htmlFor="password"
              color={"$green8"}
              textAlign="center"
            >
              Password
            </Label>
            <Input
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              size="$5"
              borderWidth={2}
              placeholder="Enter your Password"
            />
          </YStack>

          <Pressable onPress={() => route.push("/(auth)/Register")}>
            <Text fontSize={16} color={"$green8"}>
              Create Account
            </Text>
          </Pressable>

          <Form.Trigger marginTop={20} disabled={loading} asChild>
            <Button
              icon={loading ? () => <Spinner /> : undefined}
              onPress={handleLogin}
              backgroundColor={"$green8"}
              color={"white"}
            >
              Login
            </Button>
          </Form.Trigger>
        </Form>
      </View>
    </View>
  );
};

export default Login;
