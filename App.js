//This is an example code to pass values between two screens using React Navigator// 
import React, { Component } from 'react';
//import react in our code. 
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import characterBuilder from './navigation/characterBuilder';
import pointBuilder from './navigation/pointBuilder';
import characterSheet from './navigation/characterSheet';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: characterBuilder }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    SecondPage: { screen: pointBuilder },
    ThirdPage: { screen: characterSheet } 
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);