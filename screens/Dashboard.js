import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert, AsyncStorage} from 'react-native';


class Dashboard extends Component{
   // constructor(props);
    render(){
     //   const {goBack} = this.props.navigation;
        //const {goBack} = this.props.navigation;
 
     //   const name = useNavigationParam('Email');
        return(
            <View style={StyleSheet.MainContainer}>
               <Text style = {styles.TextComponentStyle}></Text>
                <Button title="Logout" onPress={ () => this.props.navigation.goBack() } ></Button>
            </View>
        )
    }
}

export default Dashboard;


const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});