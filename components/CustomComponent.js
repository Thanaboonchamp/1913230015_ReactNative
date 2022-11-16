import { Text, View } from 'react-native'
import React from 'react'

const Cat = () => {
    return(
        <View>
            <Text>I am also a cat!</Text>
        </View>
    );
};

const CustomComponent = () => {
  return (
    <View>
        <Text> Welcome</Text>
        <Cat/>
        <Cat/>
        <Cat/>
    </View>
  )
}

export default CustomComponent;
 