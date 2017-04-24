import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import HalamanPertama from './scenes/HalamanPertama';
import HalamanKedua from './scenes/HalamanKedua';
import Tab1 from './scenes/tab/tab1';
import Tab2 from './scenes/tab/tab2';
import Tab3 from './scenes/tab/tab3';

import { StackNavigator, TabNavigator } from 'react-navigation';


const MyTab = TabNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: {
      title: 'Articles',
    },
  },
  Tab2: {
    screen: Tab2,
    navigationOptions: {
      title: 'Contact',
    },
  },
  Tab3: {
    screen: Tab3,
    navigationOptions: {
      title: 'Settings',
    },
  },
},{
  tabBarPosition:Platform.OS == 'ios' ? 'bottom':'top',
  tabBarOptions:{
    activeTintColor: '#FFF',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#e74c3c',
    },
  }
});


export const App = StackNavigator({
  HalamanPertama: {
    screen: HalamanPertama
  },
  HalamanKedua: {
    screen: HalamanKedua,
    navigationOptions: {
      wow: 'Settings',
    },
  },
  MyTab: {
    screen: MyTab,
  }
});
