// By importing App from app.js, app.js is now the only one entry point for both iOS and Android
import { AppRegistry } from 'react-native';
import App from './src/components/app';


AppRegistry.registerComponent('auth', () => App);
