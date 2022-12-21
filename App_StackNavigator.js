import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/SecondPage";
import Thirdpage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "FirstPage"
        screenOptions={{
          headerStyle:{
            backgroundColor : '#8abaae'
          },
          headerTintColor : 'white',
          headerTitleStyle : {
             fontWeight : 'bold'
          },
        }}
      >
        <Stack.Screen name="Home" component = {HomeScreen} />
        <Stack.Screen name="About" component = {AboutScreen} />
        {/* <Stack.Screen name="HomePost" component = {HomePost} />
        <Stack.Screen name="CreatePost" component = {CreatePost} /> */}
        {/* <Stack.Screen name= "FirstPage" component = {FirstPage} />
        <Stack.Screen name= "SecondPage" component = {SecondPage} /> */}
        {/* <Stack.Screen name= "Firstpage" component = {Firstpage} />
        <Stack.Screen name= "Secondpage" component = {Secondpage} />
        <Stack.Screen name= "Thirdpage" component = {Thirdpage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
