import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import MixedNavigators from './MixedNavigators'
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import { createStackNavigator } from "react-navigation-stack";

import DrawerScreen from './DrawerScreen';


const AuthStack = createStackNavigator({ Login: LoginScreen, Signup: SignupScreen});


// Main app navigation router
// Creates the main app container that contains several
// containers and sub containers
export default createAppContainer(
  createSwitchNavigator({
    Main: MixedNavigators,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'Main', // Initially go to the signing in screen
  })


);
