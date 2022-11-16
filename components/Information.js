import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


function Information() {
  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>React Native</Text>
      <Text style = {{color: "blue",fontSize: 15, fontWeight: "bold"}}
      >By Thanaboon luekajornsak</Text>
      <Text style={[styles.textStyle,styles.warning]}>Student Id:1913230015 </Text>
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
    },
    textStyle:{
      fontSize:20,
    },
    warning:{
      fontWeight:"bold",
      color:"red",
    }
  })