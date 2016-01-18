'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UserSelector from '../components/select-user';
import Css from '../styles/index';

class EntryScene extends Component {
  render() {
    return (
      <View style={Css.global.container}>
        <UserSelector />
      </View>
    );
  }
}

module.exports = EntryScene;
