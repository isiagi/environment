import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Stories",
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Story Details",
                    headerShown: false
                }}
            />
        </Stack>
    );
}
