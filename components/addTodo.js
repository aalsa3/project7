import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AddTodo({ submitHandler }) {
    const [value, setText] = useState('');


    // const changeHandler = (val) => {
    //     setText(val);
    // }

    const clearInput = React.useCallback(() => setText(''), []);

    const combined = () => {
        submitHandler(value);
        clearInput();
    }

    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={text => setText(text)}
                value = {value}
                onSubmitEditing={() => combined()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    }
})