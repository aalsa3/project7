import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

export default class Logo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/logo.png")}
          />
          <Text style={styles.Titletext}>ConnectUs</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  Titletext: {
    color: "#4dd0e1",
    fontSize: 28,
    textAlign: "center",
    fontWeight: '500',
  },
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeImage: {
    width: 90,
    height: 100,
  }
});