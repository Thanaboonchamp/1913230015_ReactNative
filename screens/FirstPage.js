import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React ,{useState} from "react";


const FirstPage = ({ navigation}) => {
    const[secondText,setSecondPage] = useState('');
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Thai-Nichi Institute of Technology </Text>
      <Text style = {styles.textStyle}>Please insert your name to pass it to second screen </Text>
      <TextInput
         multiline
         placeholder='Enter Your Name'
         style = {{height:40,backgroundColor:"white" }}
         value = {secondText}
         onChangeText={setSecondPage}
    />
      <Button 
        style = {styles.textInputStyle}
        title="Go Next"
        onPress={() => navigation.navigate('SecondPage',{post:secondText})}
      />
     
    </View>
  );
};

export default FirstPage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 20,
    },
  
    heading: {
      fontSize: 25,
      textAlign: "center",
      marginVertical: 10,
    },
  
    textStyle: {
      textAlign: "center",
      fontSize: 16,
      marginVertical: 10,
    },
    textInputStyle: {
        width: "60%",
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        marginBottom: 15,
      },

  });
  
