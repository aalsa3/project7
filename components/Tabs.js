import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements';

export default class Tabs extends Component {
    constructor() {
        super();
        this.state = {
           selectedIndex: 1,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Recurring weekly', 'Custom']
        const { selectedIndex } = this.state

        return(
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={ selectedIndex }
                buttons={buttons}
                containerStyle={{height: 100}}
            />
      )
  }
}