import { View, Text ,Button} from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import { 
createDrawerNavigator,
DrawerContentScrollView,
DrawerItemList,
DrawerItem,
} from '@react-navigation/drawer'

function Feed({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Feed Screen</Text> 
      <Button
       title="Open Drawer"
       onPress={()=>navigation.openDrawer()}/>
       <Button
       title="Toggle Drawer"
       onPress={()=>navigation.toggleDrawer()}/>
    </View>
  )
}

function Article(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Article Screen</Text>
    </View>
  )
}

function CustomDrawerContent(props){
  return(
   <DrawerContentScrollView{...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
        label='Close Drawer'
        onPress={()=>props.navigation.closeDrawer()}
      />
      <DrawerItem 
      label='Toggle Drawer'
      onPress={()=>props.navigation.toggleDrawer()}
    />
   </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#b0e0e6',
        width : 240
      }
    }}
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent {...props}/>}
    >
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Article" component={Article}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App