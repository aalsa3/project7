import React from 'react';
import { View, Switch } from 'react-native';

const createSwitch = (props) => {
    return(
        <View>
            <Switch
                onValueChange = {props.toggleSwitch}
                value = {props.switchValue}/>
        </View>
    );
};

export default createSwitch;