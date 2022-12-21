import { Text, View,Button } from 'react-native'
import React ,{useState}from 'react'
import styles from '../components/styles';

const Firstpage = ({ navigation}) => {
    const[secondPage] = useState('');
    const[ThirdPage] = useState('');
  return (
    <View style = {styles.container}>
     <View style = {styles.container}>
     <Text style = {styles.textTopStyle}>This is The FirstPage </Text>
      <Button 
        title="GO TO SECOND PAGE"
        onPress={() => navigation.navigate('Secondpage',{post:secondPage})}
      />
       <Button 
        title="GO TO THIRD PAGE"
        onPress={() => navigation.navigate('Thirdpage',{post:ThirdPage})}
      />
        </View>   
      <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
  )
}

export default Firstpage
