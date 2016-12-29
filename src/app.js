
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // firebase initialization
  
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
