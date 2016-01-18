'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class UserSelector extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      inputId: '',
    };
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Input Username 
        </Text>
        <TextInput 
            style={styles.textInput} 
            value={this.state.inputId}
        />
      </View> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    width: 200,
  },
});

module.exports = UserSelector;
