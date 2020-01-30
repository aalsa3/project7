import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./navigation/AppNavigator";

import HomeScreen from "./screens/Main/HomeScreen";
import CreateScreen from "./screens/Main/CreateScreen";
import MixedNavigators from "./navigation/MixedNavigators"



export default class App extends React.Component {
  render() {  
    return <MixedNavigators />;  
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
