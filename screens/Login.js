import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity,Image,Alert, AsyncStorage} from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
        
    }
    onclickonListener = (viewId) =>{
        console.log("Alert,Button Presses is" + viewId);
        Alert.alert("Alert,Button Presses is" + viewId);
    }

    fonNoAccount= ({navigation})=> {
        console.log("Pressed");
        this.props.navigation.navigate('Register');
    }

  /*  functionLogin = ({navigation}) =>{
        fetch(url,{
            method:'POST',
            headers:{
                'content-Type':'application/json',
            },
            body:JSON.stringify({
                "email":this.state.email,
                "password":this.state.password,
            })
        }).then((response)=>response.json())
        .then((res)=>{
            console.log(res);
            if(res.message=="Login successfully"){
                alert("Success","You have successfully logged in");
                AsyncStorage.setItem('username',JSON.stringify(res.data.name));
                AsyncStorage.setItem('token',JSON.stringify(res.token));
                this.props.navigation.navigate('details');
            }
        }).catch((error)=>{
            console.error(error);
        });
    }
    */
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Enter the Email Address"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email)=>this.setState({email})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                    placeholder="Enter the Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password)=>this.setState({password})}
                    />
                </View>

                <TouchableOpacity style={[styles.buttonContainer,styles.loginButton]} onPress={()=>this.onclickonListener('login')}>
                    <Text style={styles.loginText}>Login Here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer,styles.loginButton]} >
                <Button style={styles.loginText} title="Register Here." onPress={this.fonNoAccount}></Button>
      
                </TouchableOpacity>
              

                

            </View>
        )
    }
}

export default Login


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