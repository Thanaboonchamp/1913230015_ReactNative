import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";

const Stack = createNativeStackNavigator();

const FirstStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Firstpage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Firstpage" component={Firstpage} />
    </Stack.Navigator>
  );
};
const SecondStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Secondpage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Secondpage" component={Secondpage} />
      <Stack.Screen name="Thirdpage" component={Thirdpage} />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b0e0e6",
          width: 240,
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Firstpage"
        component={FirstStack}
        options={{ title: "First Stack", drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="Secondpage"
        component={SecondStack}
        options={{ title: "Second Stack", drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
