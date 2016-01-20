'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import Styles from '../styles/index';


class TopState extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: 'null',
      rank: 9999999,
      id: null,
      country: null,
      pp: 0,
    };
    //FIXME: use props from parent
  }

  componentDidMount() {
    global.storage.load({
      key: 'defaultUser'  
    }).then( ret => {
      console.log('233');
      if (ret.id !== null){
        this.fetchDefaultUser(ret.id);
        console.log('233333');
      }
    });
  }

  fetchDefaultUser(userid) {
    global.storage.load({
      key: 'userState',
      id: userid,
      autoSync: true,
      syncInBackground: true,
    }).then( ret => {
      console.log(ret);
      this.setState({
        username: ret[0].username,
        rank: ret[0].pp_rank,
        id: userid,
        country: ret[0].country,
        pp: ret[0].pp_raw,
      });
    }).catch( err => {
      console.warn(err);
    });
  }

  render() {
    if (this.state.id === null) {
      return this.renderBlank();
    } else {
      console.log('show');
      return this.renderUserState();
    }
  }

  renderBlank() {
    //TODO
    return (<View></View>);
  }

  renderUserState() {
    return (
      <View 
          style={[Styles.global.container_row, Styles.topState.container]}>
        <View
            style={Styles.topState.avatar}>
          <Image
              style={Styles.topState.avatar_img}
              source={{uri: 'https://a.ppy.sh/' + this.state.id}}
              resizeMode='cover' />
        </View>
        <View 
            style={Styles.global.container_column, Styles.topState.leftView}>
          <View style={[Styles.global.container_row,Styles.topState.username_block]}>
            <Text style={[Styles.topState.username,Styles.global.textShadow]}>
              {this.state.username}
            </Text>
            <Image
                style={Styles.topState.country} 
                source={{uri:'https://new.ppy.sh/images/flags/' + this.state.country + '.png'}}
                resizeMode='contain'/>
          </View>
          <View style={[Styles.global.container_row,Styles.topState.bottomColumn]}>
            <Text style={[Styles.global.textShadow,Styles.topState.rank]}>{'#' + this.state.rank}</Text>
            <Text style={[Styles.global.textShadow,Styles.topState.dateinfo]}>
            {this.state.pp + 'pp'}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = TopState;
