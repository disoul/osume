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
        <View style={[ Styles.global.container, Styles.global.fill]}>
        <TopState style={[ Styles.global.container,Styles.global.fill ]} />
        </View>
    );
  }
}

module.exports = UserPage;
