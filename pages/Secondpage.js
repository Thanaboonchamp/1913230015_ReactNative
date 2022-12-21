import {  Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import styles from '../components/styles';

const Secondpage = ({navigation}) => {
    const[firstPage] = useState('');
    const[Thirdpage] = useState('');
  return (
    <View style = {styles.container}>
   <View style = {styles.container}>
   <Text style = {styles.textTopStyle}>This is The SecondPage </Text>
    <Button 
      title="GO TO FIRST PAGE"
      onPress={() => navigation.navigate('Firstpage',{post:firstPage})}
    />
     <Button 
      title="GO TO THIRD PAGE"
      onPress={() => navigation.navigate('Thirdpage',{post:Thirdpage})}
    />
   </View>
    <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
   
  </View>
  )
}

export default Secondpage

