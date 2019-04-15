// useful sources for this code
// https://firebase.google.com/docs/auth/web/password-auth?authuser=0
// https://hackernoon.com/email-authentication-with-react-native-and-firebase-99b5e9a579e0
// https://medium.com/@chrisbianca/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91
// https://reactnavigation.org/docs/en/auth-flow.html

import React, { Component } from "react";
//import Firebase from "firebase";
import Firebase from "firebase";

//import { db } from "../src/config.js";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  H1,
  Card,
  CardItem,
  Thumbnail,
  Image,
  Input,
  Item,
  Footer,
  FooterTab,
  Form,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

export default class Login extends Component {
  state = { email: "emarti94@uic.edu", password: "Patryksucks!" };

  // signs in and then moves to the main app
  SignIn() {
    const { email, password } = this.state;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(login => {
        this.props.navigation.navigate("RootStack");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  CreateAccount() {
    const { email, password } = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Button block onPress={() => this.SignIn()}>
            <Text>Sign In</Text>
          </Button>
          <Button
            block
            onPress={() => this.props.navigation.push("Registration")}
          >
            <Text>Create Account</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
