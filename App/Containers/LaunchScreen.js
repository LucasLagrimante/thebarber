import React, { Component } from "react";
import { Text, Image, View, KeyboardAvoidingView } from "react-native";
import { Images } from "../Themes";
import LoginFormScreen from "./LoginFormScreen";
// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.launch} style={styles.logo} />
          <Text style={styles.title}>Seu Shopping de Barbearias</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginFormScreen />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
