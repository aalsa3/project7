import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button, Picker, TextInput, Switch } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

import Tabs from '../../components/Tabs';

export default class CreateScreen extends Component {
  state = {
    switchValue: false,

    multiplePieces: false,
  };

  // toggleSwitch = (value) => {
  //   this.setState({switchValue: value})
  //   console.log('Switch 1 is: ' + value)
  // }

  // let unitoptions = [{
  //   value: 'CAB202',
  // }, {
  //   value: 'EFB201',
  // }, {
  //   value: 'Add new unit',
  // }];

  // let typeoptions = [{
  //   value: 'Assignment',
  // }, {
  //   value: 'Quiz',
  // }, {
  //   value: 'Group Project',
  // }, {
  //   value: 'Add new type',
  // }];

  render() {
    let multiple = <View></View>

    // Render multiple assignment pieces view
    if (this.state.multiplePieces) {
      multiple = (
        <View>
          <Tabs
            onPress = {props.updateIndex}
            selectedIndex = {props.selectedIndex} 
          />
        </View>
      )
    }


    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Unit</Text>
          <Dropdown
          //data = {unitoptions}
          >
          </Dropdown>

          <Text>Type</Text>
          <Dropdown
          //data = {typeoptions}
          >
          </Dropdown>

          <View style={styles.switch}>
            <Text>Multiple due dates</Text>
            <Picker
              selectedValue={this.state.multiplePieces}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ multiplePieces: itemValue })
              }>
              <Picker.Item label="No" value="False" />
              <Picker.Item label="Yes" value="True" />
            </Picker>

            <Switch />
            {/* <CreateSwitch
              toggleSwitch = {this.toggleSwitch}
              switchValue = {this.state.switchValue}/> */}
          </View>

          {multiple}

          <View>
            <Text>Weighting</Text>
            <TextInput style={styles.textfields} />
            {/* Add plus and minus options here later */}


            <Text>Description (optional)</Text>
            <TextInput style={styles.textfields} />
          </View>

          {/*add in date and time selector here afterwards*/}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  form: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  textfields: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});