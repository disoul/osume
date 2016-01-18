/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UserPage from './app/scene/user-page';
import storage from './app/storage/storage';

global.storage = storage;

class osume extends Component {
  render() {
    return (
        <UserPage />
    );
  }
}

AppRegistry.registerComponent('osume', () => osume);
