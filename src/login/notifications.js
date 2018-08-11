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

export default class Notifications extends Component {

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
  color: '#666666',}}>Events notifications</Text>
           

           
          </View>
        </View>
      
    );
  }

}
