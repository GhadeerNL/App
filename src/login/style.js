const React = require("react-native");

const { StyleSheet } = React;

export default {

container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  backgroundColor: '#EFEFEF',
},

logoText: {
  fontSize: 27,
  fontWeight: 400,
  marginTop: 10,
  marginBottom: 50,
  textAlign: 'center',
  color: '#666666',
},
headerText: {
  fontSize: 20,
  fontWeight: 400,
  marginBottom: 10,
  textAlign: 'center',
  color: '#666666',
},
loginFormView: {
  flex: 1
},


loginFormTextInput: {
  color:'#72727',
  height: 51,
  width: 288,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 1,
  backgroundColor: '#FFFFFF',
  paddingLeft: 15,
  marginLeft: 40,
  marginRight: 15,
  marginTop: 1,
  marginBottom: 5,

},
loginButton: {
  color:      '#FFFFFF',
  backgroundColor: '#47C2B0',
  fontWeight: 400,
  borderRadius: 5,
  height: 54,
  width: 288,
  paddingLeft: 15,
  marginLeft: 25,
  marginRight: 15,
  marginTop: 10,
  marginBottom: 5,
  textAlign: 'center',
},
nButton: {
  color:      '#FFFFFF',
  backgroundColor: '#47C2B0',
  fontWeight: 400,
  borderRadius: 5,
  height: 54,
  width: 150,
  paddingLeft: 15,
  marginLeft: 90,
  marginRight: 15,
  marginTop: 10,
  marginBottom: 5,
  textAlign: 'center',
},
signupbutton: {
  backgroundColor: 'transparent',
  fontWeight: 'bold',
},
text: {
  marginTop: 40,
  textAlign: 'center',
},
};
