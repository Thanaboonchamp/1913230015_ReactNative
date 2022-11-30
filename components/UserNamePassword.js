import { StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    TextInput,
    Button

} from 'react-native'
import React, { useState } from 'react';

const UserNamePassword = ({}) => {
    const [userNamePassword1,setuserNamePassword1] = useState('');
    const [userNamePassword2,setuserNamePassword2] = useState('');
    const checkTextInput = () => {
        if (!userNamePassword1.trim()) {
            alert('Please Enter Name');
        return;
        }
        else if (!userNamePassword2.trim())
            alert('Please Enter Email');

        else{
            alert('Done');
        }
        };
    

    return(
        <SafeAreaView style={{felx : 1}}>
            <View style={styles.container}>

                <TextInput
                value={userNamePassword1}
                onChangeText = {(userNamePassword1)=>{setuserNamePassword1(userNamePassword1)}}
                placeholder = {'Username'}
                style = {styles.input}
                />

                <TextInput
                value={userNamePassword2}
                onChangeText = {(userNamePassword2)=>{setuserNamePassword2(userNamePassword2)}}
                placeholder = {'Email'}
                style = {styles.input}
                />
                
                <Button title="SUBMIT"  color="#434242"
                onPress={checkTextInput} />
                
                
            </View>
        </SafeAreaView>
        
    )

}

export default UserNamePassword

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
marginTop: 20,
backgroundColor: '#ffffff',
},

input: {
width: 250,
height: 44,
padding: 10,
marginTop: 20,
marginBottom: 10,
backgroundColor: '#e8e8e8'
},
})