import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HalamanKedua extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.nama + "'s Page!",
    headerRight: (
      <View style={{flexDirection:'row', marginRight:10, justifyContent:'space-around', width:70}}>
        <Icon name="lock" onPress={navigation.state.params.handleSave} size={20} color="#19B5FE" />
        <Icon name="bars" size={20} color="#000" />
      </View>
    ),
  });

  componentDidMount() {
      this.props.navigation.setParams({ handleSave:this.handleSave });
  }

  handleSave(){
    alert("wkwkwk")
  }

  render() {
    const {nama} = this.props.navigation.state.params;
    return (
      <View style={{flex:1, alignItems:'center'}}>
      <Image
        source={{uri: 'https://nyimpeni.cybermantra.net/images/general/1493076558_walpaper.jpg'}}
        resizeMode="stretch"
        style={{ width:500, height: 200, justifyContent:'center', alignItems:'center' }}/>
        <Text
          onPress={()=>this.props.navigation.dispatch(NavigationActions.back())}
          style={{fontSize:30, color:'blue'}}>
          GO TO BACK!
        </Text>
        <Text
          onPress={()=>this.props.navigation.navigate('MyTab')}
          style={{fontSize:30}}>
          Hello, {nama}!
        </Text>
        <Text
          onPress={()=>this.props.navigation.navigate('MyTab')}
          style={{fontSize:30, color:'blue'}}>
          GO TO TAB view!
        </Text>
      </View>
    );
  }
}
