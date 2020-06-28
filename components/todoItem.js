import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements'

export default function TodoItem({ item, deleteHandler, checkHandler }) {

    return (
            <View style={styles.container}>



                <CheckBox containerStyle={theme.CheckBox} checked={item.checked} onPress={() => checkHandler(item.key)} />


                <View style={styles.item}>
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>

                <View style={styles.removeButton}>
                    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
                        <Icon name="ios-remove-circle-outline" size={25} />
                    </TouchableOpacity>
                </View>

            </View>
    )

}


const theme = {
    CheckBox: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        margin: 0,
        paddingLeft: 0,

        justifyContent: 'flex-start', // Horizontal within

        alignItems: 'center', // Vertical Within

        alignSelf: 'center', // Vertical

        // borderWidth: 1,
        // borderColor: 'green'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',

        paddingVertical: 16,
        paddingRight: 8,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },

    removeButton: {
        flex: 1,
        height: '100%',
        justifyContent: 'center', // Horizontal within

        alignItems: 'flex-end', // Vertical Within

        alignSelf: 'flex-start', // Vertical

        // borderWidth: 1,
        // borderColor: 'green'
    },

    item: {
        flex: 6,
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 15
    },




})