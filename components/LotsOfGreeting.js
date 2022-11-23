import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props)=>{
    const {name} =props;
return(
    <View style={{alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:20}}>
            Hello : {name}
        </Text>
    </View>
);
}

const LotsOfGreeting = () => {
  return (
    <View style={{flex:1, alignItem:'center', top:50}}>
      <Greeting name="Marry Christmas"/>
      <Greeting name="Happy New Year"/>
      <Greeting name="Songkran Festival"/>
    </View>
  )
}

export default LotsOfGreeting