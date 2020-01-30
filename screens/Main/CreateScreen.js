import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button, Picker} from "react-native";

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text> hmm THIS IS THE Create SCREEN poopsuck </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});