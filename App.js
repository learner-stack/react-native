import React,{Component} from 'react';
import {Button,StyleSheet,Text,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';


const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home'}} />
        <Stack.Screen name="Details" component={DetailScreen} options={{title:'Details'}}/>
        <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
        <Stack.Screen name="Register" component={Register} options={{title:'Register'}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{title:'Dashboard'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;