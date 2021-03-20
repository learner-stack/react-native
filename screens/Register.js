import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert, AsyncStorage} from 'react-native';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname :"",
            femail : "",
            fpassword :"",
            result:"",
        }
    }
    onclickonListener = (viewId)=>{
        console.log("Register Button is working");
        console.log(this.state);
        fetch('http://127.0.0.1:8000/api/register/',{
                method:'post',
                body:JSON.stringify({        
                    "email" : this.state.femail,
                    "name" : this.state.fname,
                    "password" : this.state.fpassword,
            }),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset=UTF-8'
                }
            })//now fetch the data. . .
            //console.log("Body is sent")
            .then(function(response){
                response.json().then(function(resp){
                console.log("everything is proper");
                console.log(resp)
                Alert.alert("Inserted");
                })
            })
         console.log("data is stored");

    }
    fLogin= ({navigation})=> {
        console.log("Pressed");
        this.props.navigation.navigate('Login');
    }
    render(){
        return(
            <View style={styles.container}>

            <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Enter the Name"
                    underlineColorAndroid='transparent'
                    onChangeText={(fname)=>this.setState({fname})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Enter the Email Address"
                    underlineColorAndroid="transparent"
                    onChangeText={(femail)=>this.setState({femail})}
                    />
                </View>

                
               
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Enter the Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(fpassword)=>this.setState({fpassword})}
                    />
                </View>

              

                <TouchableOpacity style={[styles.buttonContainer,styles.loginButton]} onPress={()=>this.onclickonListener('register')}>
                    <Text style={styles.loginText}>Register Here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer,styles.loginButton]}>
                <Button style={styles.loginText}
                        title="Have Account?Login"
                        onPress={this.fLogin}
                />
                </TouchableOpacity>
            </View>
              

                

            
        )
    }
}

export default Register



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });