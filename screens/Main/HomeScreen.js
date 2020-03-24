import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from './CreateScreen';

import Icon from "react-native-vector-icons/Ionicons";
import * as Progress from 'react-native-progress';
import { render } from 'react-dom';

export default class HomeScreen extends React.Component {
	render() {

		return (
			<View style={styles.container}>
	
				{/* Button Template for upcoming assignments,
				can later make this a component */}
				<TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("AssignmentDetails", {
																																unit: 'EFB201',
																																weight: '50%',
																																dueIn: '1'
																															 });}}>
					<View style={[styles.colorCode, { backgroundColor: 'purple' }]}></View>
					<View style={styles.buttonMain}>
						<View style={styles.buttonTop}>
	
							{/* Top Left */}
							<View style={styles.buttonTopLeft}>
								<Text style={styles.buttonHeading}>EFB201</Text>
								<Text style={styles.subtitleText}>Assignment 1 - Essay</Text>
							</View>
	
	
							{/* Top Right */}
							<View style={styles.buttonTopRight}>
								<Text style={styles.buttonHeading}>50%</Text>
								<Text style={styles.subtitleText}>Due in 1 day</Text>
							</View>
						</View>
	
						{/* Bottom Progress Bar */}
						<View style={styles.buttonProgressBar}>
							<Progress.Bar progress = {0.8} width={320} height = {12} borderRadius = {500} borderWidth = {0} color = {'#1DA1D2'} unfilledColor = {'#D6D6D6'} />
						</View>
					</View>
				</TouchableOpacity>
	
				{/* Button Template for upcoming assignments,
				can later make this a component */}
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AssignmentDetails") }>
					<View style={[styles.colorCode, { backgroundColor: 'red' }]}></View>
					<View style={styles.buttonMain}>
						<View style={styles.buttonTop}>
	
							{/* Top Left */}
							<View style={styles.buttonTopLeft}>
								<Text style={styles.buttonHeading}>CAB202</Text>
								<Text style={styles.subtitleText}>Assignment 1</Text>
							</View>
	
	
							{/* Top Right */}
							<View style={styles.buttonTopRight}>
								<Text style={styles.buttonHeading}>40%</Text>
								<Text style={styles.subtitleText}>Due in  20 days</Text>
							</View>
						</View>
	
						{/* Bottom Progress Bar */}
						<View style={styles.buttonProgressBar}>
							<Progress.Bar progress = {0.15} width={320} height = {12} borderRadius = {500} borderWidth = {0} overFlow = {'hidden'}  color = {'#1DA1D2'} unfilledColor = {'#D6D6D6'}  />
						</View>
					</View>
				</TouchableOpacity>
	
				{/* Button Template for upcoming assignments,
				can later make this a component */}
				<TouchableOpacity style={[styles.button, {backgroundColor: 'rgba(52, 52, 52, 0.8)'}] } onPress={() => console.log('pressed')}>
					<View style={[styles.colorCode, { backgroundColor: 'red' }]}></View>
					<View style={styles.buttonMain}>
						<View style={styles.buttonTop}>
	
							{/* Top Left */}
							<View style={styles.buttonTopLeft}>
								<Text style={styles.buttonHeading}>CAB202</Text>
								<Text style={styles.subtitleText}>Assignment 1</Text>
							</View>
	
	
							{/* Top Right */}
							<View style={styles.buttonTopRight}>
								<Text style={styles.buttonHeading}>40%</Text>
								<Text style={styles.subtitleText}>Complete</Text>
							</View>
						</View>
	
						{/* Bottom Progress Bar */}
						<View style={styles.buttonProgressBar}>
							<Progress.Bar progress = {0.15} width={320} height = {12} borderRadius = {50} borderWidth = {0}  color = {'#1DA1D2'} unfilledColor = {'#D6D6D6'}  />
						</View>
					</View>
				</TouchableOpacity>
	
	
				<Button
					title="Go to create screen"
					onPress={() => this.props.navigation.navigate('Create')}
				/>
	
			</View>
		);
	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',

		paddingTop: '5%',
	},
	button: {
		width: '90%',
		height: '15%',
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",

		borderColor: 'black',
		borderWidth: 2,

		backgroundColor: "#fff",

		shadowColor: "#000",
		elevation: 6,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		marginBottom: 20,
	},
	buttonMain: {
		flex: 30,
		height: '100%',
		flexDirection: 'column',
	},
	buttonTop: {
		flexDirection: "row",
		flex: 3,
		paddingTop: 10
	},
	buttonTopLeft: {
		flex: 1,
		marginLeft: 10,
		alignItems: 'flex-start',
	},
	buttonTopRight: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 10,

	},
	buttonHeading: {
		fontSize: 20
	},
	buttonProgressBar: {
		width: '100%',
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		transform: [{ rotateY: '180deg' }]
	},
	colorCode: {
		flex: 1,
		opacity: 1,
		height: '100%',
		backgroundColor: 'purple',
		zIndex: -500,
	},

	headingText: {
		fontFamily: 'Roboto',
		fontSize: 24,
	},

	subtitleText: {
		fontFamily: 'Roboto',
		fontSize: 14,
		color: '#9e9e9e',

	}
});