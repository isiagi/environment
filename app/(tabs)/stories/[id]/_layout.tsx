import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    title: "Overview",
                    drawerLabel: "Overview"
                }}
            />
            <Drawer.Screen
                name="facts"
                options={{
                    title: "Key Facts",
                    drawerLabel: "Key Facts"
                }}
            />
            <Drawer.Screen
                name="help" 
                options={{
                    title: "How to Help",
                    drawerLabel: "How to Help",

                }}
            />
            <Drawer.Screen
                name="problem" 
                options={{
                    title: "Impact",
                    drawerLabel: "Possible Impacts"
                }}
            />
        </Drawer>
    );
}

