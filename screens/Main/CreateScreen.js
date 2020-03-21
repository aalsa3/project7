import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button, Picker, TextInput, Switch} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

export default function CreateScreen() {

  let unitoptions = [{
    value: 'CAB202',
  }, {
    value: 'EFB201',
  }, {
    value: 'Add new unit',
  }];

  let typeoptions = [{
    value: 'Assignment',
  }, {
    value: 'Quiz',
  }, {
    value: 'Group Project',
  }, {
    value: 'Add new type',
  }];
  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text>Unit</Text>
      <Dropdown 
        data = {unitoptions}
      >
      </Dropdown>
      
      <Text>Type</Text>
      <Dropdown 
        data = {typeoptions}
      >
      </Dropdown>

      <View style={styles.switch}>
        <Text>Multiple due dates</Text>
        <Switch/>
      </View>     
 
      <Text>Weighting</Text>
      <TextInput style={styles.textfields}/>
      {/* Add plus and minus options here later */}


      <Text>Description (optional)</Text>
      <TextInput style={styles.textfields}/>
      </View>
    </View>
  );
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