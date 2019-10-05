import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import characterBuilder from './navigation/characterBuilder';
import pointBuilder from './navigation/pointBuilder';
import characterSheet from './navigation/characterSheet';
import skillsSheet from './navigation/skillsSheet';

const App = createStackNavigator({

    FirstPage: { screen: characterBuilder }, 
    SecondPage: { screen: pointBuilder },
    ThirdPage: { screen: characterSheet },
    ForthPage: { screen: skillsSheet } 
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);