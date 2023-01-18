import { View, Text,Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from'@expo/vector-icons'

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button 
        title="Go To Setting"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

function SettingsScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings</Text>
      <Button 
        title="Go To Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();



function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name === 'Home'){  
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'
          }else if (route.name === 'Settings'){
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
          }
          //you can return any component that here!
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray'

        

      })}
    >
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App