import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert("Hello I am Simple Alert");
  };
  const twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
        //title
        'Hello',
        //body
        'I am two option aler.Do you want to cancel me??',
        [
            {
                text:'yes',
                onPress:()=>alert('Yes Pressed')
            },
            {
                text:'no',
                onPress:()=>alert('No Pressed')
            }
        ],
        //clicking out side of Alert will not cancel
        {cancelable:false}

    )
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>AlertExample</Text>
        <Button title="Simple Alert" onPress={simpleAlertHandler} />
        <Button
          title="Alert with Two Options"
          onPress={twoOptionAlertHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
