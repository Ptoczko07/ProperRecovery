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

export default class Registration extends Component {
  state = { email: "martinezemmanuel40@gmail.com", password: "something!!123" };
  userState = { age: "", height: "", weight: "" };

  // this will create both the account and move to the main app page
  CreateAccount() {
    const { email, password } = this.state;
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(login => {
        this.props.navigation.navigate("RootStack");
      })
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

            <Item>
              <Input
                placeholder="Age"
                value={this.userState}
                onChangeText={age => this.setState({ age })}
              />
            </Item>
            <Item>
              <Input
                placeholder="height"
                value={this.userState}
                onChangeText={height => this.setState({ height })}
              />
            </Item>
            <Item>
              <Input
                placeholder="weight"
                value={this.userState}
                onChangeText={weight => this.setState({ weight })}
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
          {/*
            remember to use this syntax for the onPress in order to
            not trigger automatically when rendering
            () =>
            */}
          <Button block onPress={() => this.CreateAccount()}>
            <Text>Register</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
