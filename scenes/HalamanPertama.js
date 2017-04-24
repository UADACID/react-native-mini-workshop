import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
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
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput
          style={{height: 50, width:300}}
          placeholder="Isi dengan nama anda!"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity
        onPress={() => this.handleToHalamanDua()}
        style={{width:300, height:50, marginTop:20, justifyContent:'center', alignItems:'center', backgroundColor:'#e74c3c', borderRadius:10}}>
          <Text
            style={{color:'white'}}
            >
            Tekan Ini !!!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
