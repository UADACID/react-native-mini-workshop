import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export default class Tab1 extends Component {

  static navigationOptions = {
    tabBarLabel: 'describe',
  };

  render() {
    return (
      <View style={{flex:1, padding:10}}>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{width: 400, height: 400}}/>
        <Text style={{fontSize:20, textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </View>
    );
  }
}
