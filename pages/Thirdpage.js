import {  Text, View,Button  } from 'react-native'
import React,{useState} from 'react'
import styles from '../components/styles';

const Thirdpage = ({navigation}) => {
    const[firstPage] = useState('');
    const[secondPage] = useState('');
  return (
    <View style = {styles.container}>
        <View style = {styles.container}>
      <Text style = {styles.textTopStyle}>This is The ThirdPage </Text>
      <Button 
        title="GO TO FIRST PAGE"
        onPress={() => navigation.navigate('Firstpage',{post:firstPage})}
      />
       <Button 
        title="GO TO SECOND PAGE"
        onPress={() => navigation.navigate('Secondpage',{post:secondPage})}
      />
      </View>
     <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  )
}

export default Thirdpage

