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
import EntryScene from './app/scene/entry-scene';

class osume extends Component {
  render() {
    return (
      <EntryScene />
    );
  }
}

AppRegistry.registerComponent('osume', () => osume);
