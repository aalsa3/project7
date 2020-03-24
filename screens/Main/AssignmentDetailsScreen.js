import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function AssignmentDetailsScreen({ route, navigation }) {
    const { unit, weight, dueIn } = route.params

    navigation.setOptions({
        title: 'Assignment Details',
        headerStyle: {
            backgroundColor: '#1DB4D2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Roboto',
            fontSize: 25,
        },
        headerTitleAlign: 'center'
    });
    return (
        <View style={styles.container}>
            <View style = {styles.assignmentDetails}>
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

            <View style={styles.todoHeader}>
                <Text style = {styles.headingText}> Todo List</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    assignmentDetails: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    todoHeader: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    buttonTopLeft: {
        flex: 1,
        marginLeft: 30,
        alignItems: 'flex-start',
    },
    buttonTopRight: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 30,

    },
    buttonHeading: {
        fontSize: 20
    },


    headingText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        textAlign: 'center',
    },

    subtitleText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#9e9e9e',

    }
});