import React from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';


function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Welcome to the Homescreen</Text>
         <Button 
            title="Go to Details" onPress={()=>navigation.navigate('Login')}></Button>
        </View>
    )
}

export default HomeScreen;