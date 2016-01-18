'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TopState from '../components/top-state';
import Styles from '../styles/index';

class UserPage extends Component {
  render() {
    return (
      <TopState style={ Styles.global.container } />
    );
  }
}

module.exports = UserPage;
