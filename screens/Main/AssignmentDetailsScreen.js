import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox } from 'react-native-elements'
import TodoItem from '../../components/todoItem';
import AddTodo from '../../components/addTodo';


export default function AssignmentDetailsScreen({ route, navigation }) {

    const [todos, setTodos] = useState([
        { text: 'Write title page \npoopsuckpoopsuckpoopsuckpoopsuckpoopsuck', checked: true, key: '1' },
        { text: 'Finish Introduction', checked: false, key: '2' },
        { text: 'Research Notes', checked: false, key: '3' }
    ]);


    const deleteHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    };

    const checkHandler = (key) => {

        setTodos((prevTodos) => {
            var index = prevTodos.findIndex(item => item.key === key);

            prevTodos[index].checked = !prevTodos[index].checked;


            return [
                ...prevTodos
            ]
        })
    }

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [

                ...prevTodos,
                { text: text, checked: false, key: Math.random().toString() }
            ]
        })
    }

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
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>


            <View style={styles.container}>
                <View style={styles.assignmentDetails}>
                    {/* Top Left */}
                    <View style={styles.buttonTopLeft}>
                        <Text style={styles.buttonHeading}> {unit} </Text>
                        <Text style={styles.subtitleText}>Assignment 1 - Essay</Text>
                    </View>

                    {/* Top Right */}
                    <View style={styles.buttonTopRight}>
                        <Text style={styles.buttonHeading}> {weight} </Text>
                        <Text style={styles.subtitleText}>Due in {dueIn} day/s</Text>
                    </View>
                </View>

                <View style={styles.todoHeader}>
                    <View style={{}}>
                        <Text style={styles.headingText}> Todo List </Text>
                    </View>

                    <View style={styles.checkForm}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} deleteHandler={deleteHandler} checkHandler={checkHandler} />
                            )}
                        />
                    </View>

                </View>
                <KeyboardAvoidingView style={styles.footer}>
                    <AddTodo submitHandler={submitHandler} />
                </KeyboardAvoidingView>


            </View>

        </TouchableWithoutFeedback>
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
        height: '60%',
        flexDirection: 'column',
        //justifyContent: 'center',

    },
    checkForm: {
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 40,
        borderWidth: 2,
        borderColor: 'black'

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

    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    }
});