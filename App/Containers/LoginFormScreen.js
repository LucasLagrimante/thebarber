import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/LoginFormScreenStyle";

export default class LoginFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          style={styles.input}
          onChange={event => this.setState({ value: event.target.username })}
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TextInput
          value={this.state.password}
          style={styles.input}
          onChange={event => this.setState({ value: event.target.password })}
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: "SignScreen"
              })
            )
          }
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
