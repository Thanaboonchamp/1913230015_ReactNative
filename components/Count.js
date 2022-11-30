import { View, Text, Button, StyleSheet} from "react-native";
import React, { useEffect, useState } from "react";

const Count = ({num,title}) => {
//   const {num,title} = props;
  const [count, setCount] = useState(num);
/* 
  useEffect(()=>{
    console.log('use effect1')
  });

  useEffect(()=>{
    console.log('use effect2')
  },[count]);

  useEffect(()=>{
    console.log('use effect3')
  },[]);
 */

  return (
    <View>
      <Text>{title} : {count}</Text>
      <Button title="Click Me" 
      onPress={()=>setCount(count + 1)} />
    </View>
  );
};

export default Count;

