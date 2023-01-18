import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
const IoniconsHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={30}
    color="white"
    {...props}
  />
);
const HomeScreen = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="person-add"
            iconName="person-add"
            color="Black"
            onPress={() => alert("Register")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={24} color="#008b8b" />
      <Text>Home Screen</Text>
      <Button title="Go to Setting" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};
export default HomeScreen