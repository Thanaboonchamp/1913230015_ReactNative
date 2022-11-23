import { View, Text } from "react-native";
import React from "react";

const CustomText = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "black", fontSize: 15 }}>
        Frist Name is : {props.fname} Last name is : {props.lname}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View style={{ flex: 1, alignItem: "center", top: 50 }}>
      <CustomText fname="Thanaboon" lname="Luekajornsak" />
      <CustomText fname="Passawee" lname="Wanwilai" />
    </View>
  );
};

export default MyCustomTextWith;
