import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Editinfo extends Component {

  render() {
    return (
      
     
        <View style={styles.loginScreenContainer}>

       <Image
  style={{
    width: 80,
    height: 60,
   marginLeft: 150,
  marginTop: 50,
  marginBottom: 5,

  }}
  source={require('./finallogo.png')}
/>
          <View style={styles.loginFormView}>

          <Text style={styles.logoText}>Fortydays</Text> 
          <Text style={{fontSize: 18,
          textDecorationLine: 'underline',
fontWeight: 'bold',
  textAlign: 'center',
  color: '#666666',}}>Edit Personal Info</Text>
           <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15,
          marginLeft:30,
          color: '#727272',
        marginTop:70,
          }}>
            First Name: </Text> <TextInput style={{color:'#72727',
  height: 51,
  width: 210,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 0.5,
  backgroundColor: '#FFFFFF',
  paddingLeft: 15,
  marginRight: 15,
  marginTop: 50,
  marginBottom: 5,}} /></View>

<View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15,
          marginLeft:30,
          color: '#727272',
        marginTop:20,
          }}>
            Last Name: </Text> <TextInput style={{color:'#72727',
  height: 51,
  width: 210,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 0.5,
  backgroundColor: '#FFFFFF',
  paddingLeft: 15,
  marginRight: 15,
  marginTop: 1,
  marginBottom: 5,}} /></View>

<View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15,
          marginLeft:50,
          color: '#727272',
        marginTop:20,
          }}>
            E-mail: </Text> <TextInput style={{color:'#72727',
  height: 51,
  width: 210,
    marginLeft:10,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 0.5,
  backgroundColor: '#FFFFFF',
  paddingLeft: 15,
  marginRight: 15,
  marginTop: 1,
  marginBottom: 5,}} /></View>           

<View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15,
          marginLeft:30,
          color: '#727272',
        marginTop:20,
          }}>
            Password: </Text> <TextInput style={{color:'#72727',
  height: 51,
  width: 210,
    marginLeft:7,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 0.5,
  backgroundColor: '#FFFFFF',
  paddingLeft: 15,
  marginRight: 15,
  marginTop: 1,
  marginBottom: 5,}} /></View>
        
             <Button
              buttonStyle={styles.loginButton}
              onPress={()=>
this.props.navigation.navigate ('')}
              title="Confirm"
            />
           
          </View>
        </View>
      
    );
  }

}
