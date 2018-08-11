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
import { Button, Icon } from 'react-native-elements';

export default class Application extends Component {

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
          <Text style={styles.headerText}>Fortydays</Text> 
                      <ScrollView>

<Text style={{fontSize: 18,
          
fontWeight: 'bold',
  marginTop: 50,
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',}}>Appliction:</Text>
          
          
            <TextInput placeholder="FirstName" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="LastName" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
<Text style={{fontSize: 18,
          textDecorationLine: 'underline',
fontWeight: 'bold',
  marginTop: 50,
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',}}>Visa Info:</Text>
            <TextInput placeholder="Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Code" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Submit"
            />
            </ScrollView>

        </View>
    );
  }

  
}
