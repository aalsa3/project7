import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button } from "react-native";
import { Platform } from "react-native";
import {
	createAppContainer,
	DrawerNavigator,
	createDrawerNavigator,
	createSwitchNavigator,
	createMaterialTopTabNavigator,
	getActiveChildNavigationOptions
} from "react-navigation";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DrawerScreen from './DrawerScreen';

import HomeScreen from "../screens/Main/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const MainNavigator = createStackNavigator({
// 	Home: { screen: HomeScreen },
// 	//Details: {screen: DetailsScreen},
// 	//Calendar: {screen: CalendarScreen},
// 	//Create: {screen: CreateScreen},
// },
// 	{
// 		initialRouteName: "Home",
// 	});

// const App = createAppContainer(MainNavigator);

// export default App;
