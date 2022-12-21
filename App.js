import { View, Text, Button } from 'react-native'
import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen()
{
  return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button 
        title='Go To Notification'
        />
      </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App