import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


function Information() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text>By Thanaboon luekajornsak</Text>
      <Text>Student Id:1913230015 </Text>
      <Text>Major : MT</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container : {
      flex:1,
      backgroundColor:"#add8e6",
      alignItems:"center",
      justifyContent:'center',
    }
  })