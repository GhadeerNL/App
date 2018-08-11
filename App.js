import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/login/login.js'
import ApplyScreen from './src/login/programs.js'
import SignUpScreen from './src/login/signup.js'
import Freeprog from './src/login/freeprog.js'
import Application from './src/login/application.js'
import Applicationfree from './src/login/applicationfree.js'
import Userprof from './src/login/userprofile.js'
import Paidprog from './src/login/paidprog.js'
import Viewinfo from './src/login/viewinfo.js'
import Editinfo from './src/login/editinfo.js'
import Confirm from './src/login/confirm.js'
import Viewskills from './src/login/viewskills.js'
import Notifications from './src/login/notifications.js'
import Enrolled from './src/login/enrolled.js'



import {createStackNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
<AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Userprof:{screen : Userprof},
  Enrolled:{screen : Enrolled},
    Viewskills:{screen : Viewskills},
    Notifications:{screen : Notifications},
  Viewinfo:{screen:Viewinfo},
  Editinfo:{screen:Editinfo},
  Paidprog:{screen : Paidprog},
    Confirm:{screen : Confirm},
  ApplyScreen:{screen : ApplyScreen},
Application:{screen : Application},
  LoginScreen:{screen : LoginScreen},
  SignUpScreen:{screen : SignUpScreen},
  Freeprog:{screen : Freeprog},
Applicationfree:{screen : Applicationfree},




})