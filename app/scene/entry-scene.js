'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UserSelector from '../components/select-user';
import Styles from '../styles/index';

class EntryScene extends Component {
  render() {
    return (
      <View style={Styles.global.container}>
        <UserSelector />
      </View>
    );
  }
}

module.exports = EntryScene;
