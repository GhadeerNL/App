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

 class ApplyScreen extends Component {

  render() {
    return (
        <View style={styles.loginScreenContainer}>

        <Image
  style={{
    width: 80,
    height: 60,
   marginLeft: 150,
  marginTop: 20,
  marginBottom: 5,

  }}
  source={require('./finallogo.png')}
/>
          <View >
          <Text style={styles.headerText}>Fortydays</Text>

          <Text style={{fontSize: 18,
          textDecorationLine: 'underline',
fontWeight: 'bold',
  marginTop: 30,
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',}}>Apply for a new program:</Text>

            <TouchableOpacity style={{
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }}
   onPress={()=>this.props.navigation.navigate ('Freeprog')}>
            <Image
  style={{
    width: 350,
    height: 180,
  marginTop: 10,
  }}
  source={require('./free.png')}
/> 
  
              </TouchableOpacity>
                 
		<TouchableOpacity style={{
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }}   onPress={()=>this.props.navigation.navigate ('Paidprog')}>

           <Image
  style={{
    width: 350,
    height: 180,
  }}
  source={require('./paid.png')}
/> 
              </TouchableOpacity>

           
          </View>
        </View>
 
    );
  }

 
}
export default ApplyScreen;
