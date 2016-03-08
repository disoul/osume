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
import Styles from './app/styles/index';

global.storage = storage;

class osume extends Component {
  render() {
    return (
      <UserPage userid="124493" />
    );
  }
}

AppRegistry.registerComponent('osume', () => osume);
