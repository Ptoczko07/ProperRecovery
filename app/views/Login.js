// useful sources for this code
// https://firebase.google.com/docs/auth/web/password-auth?authuser=0
// https://hackernoon.com/email-authentication-with-react-native-and-firebase-99b5e9a579e0
// https://medium.com/@chrisbianca/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91
// https://reactnavigation.org/docs/en/auth-flow.html

import React, { Component } from "react";
//import Firebase from "firebase";
import Firebase from "firebase";

//import { db } from "../src/config.js";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Label,
  Input,
  Item,
  Form,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import { requireNativeViewManager } from "expo-core";

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
        var errorCode    = error.code;
        var errorMessage = error.message;
      });
  }

  CreateAccount() {
    const { email, password } = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode    = error.code;
        var errorMessage = error.message;
      });
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }} />
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Proper Recovery</Title>
        </Body>
        <Right style={{ flex: 1 }} />
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.content}>
          <Image
            style  = {styles.image}
            source = {require( '../assets/pr.jpg')}
          />
            <View style={styles.formStyle}>
              <Form style={{ backgroundColor: "#9bc1ff" }}>
                <Item inlineLabel>
                  <Label>Username</Label>
                  <Input
                    placeholder  = "Email"
                    value        = {this.state.email}
                    onChangeText = {email => this.setState({ email })}
                  />
                </Item>
                <Item inlineLabel last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry = {true}
                    placeholder     = "Password"
                    value           = {this.state.password}
                    onChangeText    = {password => this.setState({ password })}
                  />
                </Item>
              </Form>
              <Button block onPress={() => this.SignIn()}>
                <Text>Sign In</Text>
              </Button>
              <Button
                block
                style   = {{ marginTop: 10 }}
                onPress = {() => this.props.navigation.push("Registration")}
              >
                <Text>Create Account</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: "#0b3c5d",
    justifyContent : "flex-start"
  },
  formStyle: {
    marginTop  : 30,
    marginLeft : 15,
    marginRight: 15
  },
  image: {
    width    : 150,
    height   : 150,
    alignSelf: 'center',
    marginTop: 30
  }
});
