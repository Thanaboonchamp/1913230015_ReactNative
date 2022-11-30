import { StyleSheet,
     Text, 
     View,
     SafeAreaView,
     TextInput,
     Button
    
    } from 'react-native'
import React, { useState } from 'react';

const TexInput1 = () => {

    const [userName,setUserName] = useState('');

    return(
        <SafeAreaView style={{felx:1}}>
            <View style={styles.container}>
                <Text>
                    Insert Any Text In Below
                </Text>
                <TextInput
                value={userName}
                onChangeText = {(userName)=>{setUserName(userName)}}
                placeholder = {'Input userName'}
                style = {styles.input}
                />
            </View>
        </SafeAreaView>
    )

}

export default TexInput1

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