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

class LoginScreen extends Component {

  render() {
    return (
        <View style={styles.loginScreenContainer}>

        <Image
  style={{
    width: 115,
    height: 104,
   marginLeft: 130,
  marginTop: 80,

  }}
  source={require('./finallogo.png')}
/>
          <View style={styles.loginFormView}>

          <Text style={styles.logoText}>Fortydays</Text>
            <TextInput placeholder="E-mail" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this._handlePress()}
              title="Login"
            />
            <Text style={styles.text}> don't have an account yet? </Text>
            <Button
              buttonStyle={styles.signupbutton}
              onPress={()=>
this.props.navigation.navigate ('SignUpScreen')}
              title="Sign Up"
              color="#666666"
            />
          </View>
        </View>
     
    );
  }
}

  export default LoginScreen;
