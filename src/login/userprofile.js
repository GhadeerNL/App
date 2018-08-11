import React, { Component } from 'react';
import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

const appId = '1047121222092614';
export default class Userprof extends Component {
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
          /* <Text style={styles.logoText}>Fortydays</Text> */
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginBottom: 10,
              textAlign: 'center',
              color: '#666666',
            }}>
            Welcome 
          </Text>
           <Button
            buttonStyle={styles.loginButton}
            onPress={()=>
this.props.navigation.navigate ('ApplyScreen')}
            title="View Available programs"
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={()=>
this.props.navigation.navigate ('Viewinfo')}
            title="View/Edit Personal Info"
          />
           <Button
            buttonStyle={styles.loginButton}
            onPress={()=>
this.props.navigation.navigate ('Enrolled')}
            title="Programs enrolled in:"
          />
         
          <Button
            buttonStyle={styles.loginButton}
            onPress={()=>
this.props.navigation.navigate ('Viewskills')}
            title="View Acquired Skills"
          />
          <Button
            buttonStyle={styles.loginButton}
           onPress={()=>
this.props.navigation.navigate ('Notifications')}
            title="Events Notifications"
          />
        </View>
      </View>
    );
  }
}
