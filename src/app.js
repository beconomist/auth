
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // firebase initialization
    firebase.initializeApp({
      apiKey: 'AIzaSyB2q9wVdIxcCFa53EX9jLoYUwjIG97VrW4',
      authDomain: 'auth-2e716.firebaseapp.com',
      databaseURL: 'https://auth-2e716.firebaseio.com',
      storageBucket: 'auth-2e716.appspot.com',
      messagingSenderId: '634792994703'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
