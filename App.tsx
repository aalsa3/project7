import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./navigation/AppNavigator";

import HomeScreen from "./screens/Main/HomeScreen";
import CreateScreen from "./screens/Main/CreateScreen";
import MixedNavigators from "./navigation/MixedNavigators"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					{/* Home Screen / Upcoming Assignments */}
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: 'Upcoming Assignments',
							headerStyle: {
								backgroundColor: '#1DB4D2',
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontFamily: 'Roboto',
								fontSize: 25,
							},
							headerTitleAlign: 'center'
						}}
						
						/>

					{/* Create Screen / Add Assignments */}
					<Stack.Screen name="Create" component={CreateScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
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
