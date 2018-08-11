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

class Paidprog extends Component {

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
           <Text style={styles.headerText}>Fortydays</Text> */
          <ScrollView >

          <Text style={{fontSize: 18,
          textDecorationLine: 'underline',
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',}}>Paid Programs:</Text>
 <Text style={{fontSize: 12,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',}}>Click on the program you'd like to enroll in:</Text>

    <TouchableOpacity style={{
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }}    onPress={()=>this.props.navigation.navigate ('Application')}>
            <Image
  style={{
    width: 360,
    height: 220,
  }}
  source={require('./app.png')}
/> 
              </TouchableOpacity>
                 
		<TouchableOpacity style={{
    borderRadius: 20,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }}    onPress={()=>this.props.navigation.navigate ('Application')}>

           <Image
  style={{
    width: 360,
    height: 200,
  }}
  source={require('./web.png')}
/> 
              </TouchableOpacity>

           
            </ScrollView>
        </View>
     
    );
  }

}

  export default Paidprog;
