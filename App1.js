import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from './components/Information'
import Welcome from './components/Welcome'
import Practice1_styleSheet from './components/Practice1_styleSheet'
import TxtInput from './components/TxtInput'
import CustomComponent from './components/CustomComponent'
import Logo from './components/Logo'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import TexInput1 from './components/TexInput1'
import UserNamePassword from './components/UserNamePassword'
import AlertExample from './components/AlertExample'
import ImageWithTextinput from './components/ImageWithTextinput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View>
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1_styleSheet/> */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <TexInput1/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertExample/> */}
      {/* <ImageWithTextinput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      <TouchablePractice/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',

  }

})

 