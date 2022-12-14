import { View, Text, Button } from "react-native";
import React from "react";
import {Ionicons, FontAwesome} from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Ionicons name = 'home' size={30} color='#191970'/>
      <Text>Home Screen</Text>
      <Button
        title="About Me"
        onPress={() => navigation.navigate("About",{
            email:'reactnative@tni.ac.th'
        })}
      />
    </View>
  );
};

export default HomeScreen;
