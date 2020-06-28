import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class Tabs extends Component {
    setRecurring = <View></View>;

    constructor() {
        super();
        this.state = {
           selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }


    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Recurring weekly', 'Custom']
        const { selectedIndex } = this.state

        let recurringView = <View></View>;
        
        // Display the week selector
        if(selectedIndex == 0){
            recurringView = (
                <View>
                    {/* Weekly frequency selector */}
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: 100, height: 40}}>
                            <Text>Repeat every</Text>
                        </View>
                        <View style={{width: 100, height: 40}}>
                            <TextInput
                                defaultValue={'1'}
                            />
                        </View>
                        <View style={{width: 300, height: 40}}>
                            <Text>Week</Text>
                        </View>
                    </View>

                    {/* Select days that assignments occur on*/}
                </View>
            );
        }
        // Display the custom date picker
        else{

        }

        return(
            <View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={ selectedIndex }
                    buttons={buttons}
                    containerStyle={{height: 30}}
                    selectedButtonStyle={{backgroundColor:'#1DB4D2'}}
                />

                {recurringView}
            </View>
    )
  }
}