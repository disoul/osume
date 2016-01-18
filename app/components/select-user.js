'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../styles/index'

class UserSelector extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      inputId: '',
    };
  } 

  render() {
    return (
      <View style={Styles.global.container_column}>
        <Text>
          Input Username 
        </Text>
        <View style={Styles.global.container_row}>
          <TextInput
              style={Styles.userSelector.input}
              value={this.state.inputId}
              onChangeText={(text) => this.setState({inputId: text})}
          />
          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              style={Styles.userSelector.buton}
          >
            <View style={Styles.global.container}>
              <Text>Enter</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View> 
    ); 
  }
}

module.exports = UserSelector;
