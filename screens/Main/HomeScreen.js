import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, InteractionManager, DrawerLayoutAndroid, Button} from "react-native";



export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text> hmm THIS IS THE HOME SCREEN poopsuck </Text>
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