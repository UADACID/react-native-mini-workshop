import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';

export default class HalamanPertama extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    headerVisible: false,
    title: 'Welcome',
  }

  handleToHalamanDua(){
    Keyboard.dismiss();
    const { navigate } = this.props.navigation;
    navigate('HalamanKedua',{nama:this.state.text});
  }

  render() {
    return (
      <Image
        source={{uri: 'https://nyimpeni.cybermantra.net/images/general/1493076558_walpaper.jpg'}}
        resizeMode="stretch"
        style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text
          style={{ fontSize:45, color:'#FFF', marginBottom:200}}>
            My App
        </Text>
        <TextInput
          style={{ height: 50, width:300 }}
          placeholder="Nama"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
        onPress={() => this.handleToHalamanDua()}
        style={{ width:300, height:50, marginTop:20, justifyContent:'center', alignItems:'center', backgroundColor:'#d35400', borderRadius:10}}>
          <Text
            style={{color:'white'}}>
              Tekan Ini !!!
          </Text>
        </TouchableOpacity>
      </Image>
    );
  }
}
