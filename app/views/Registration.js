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
  Picker,
  Input,
  Item,
  Form,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Label
} from "native-base";

export default class Registration extends Component {
  state = {
    email: "martinezemmanuel40@gmail.com",
    password: "something!!123",
    selected2: undefined
  };
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

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
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
            <View style={styles.formStyle}>
              <Form style={{ backgroundColor: "#9bc1ff" }}>
                <Item inlineLabel>
                  <Label>Email</Label>
                  <Input
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>

                <Item inlineLabel>
                  <Label>Age</Label>
                  <Input
                    keyboardType="numeric"
                    // value        = {this.userState}
                    // onChangeText = {age => this.setState({ age })}
                  />
                </Item>
                <Item inlineLabel>
                  <Label>Height</Label>
                  <Input
                    keyboardType="numeric"
                    // value        = {this.userState}
                    // onChangeText = {height => this.setState({ height })}
                  />
                </Item>
                <Item inlineLabel>
                  <Label>Weight</Label>
                  <Input
                    keyboardType="numeric"
                    // value        = {this.userState}
                    // onChangeText = {weight => this.setState({ weight })}
                  />
                </Item>
                <Item inlineLabel picker>
                  <Label>Gender</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select your gender"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="" value="key0" />
                    <Picker.Item label="Male" value="key1" />
                    <Picker.Item label="Female" value="key2" />
                  </Picker>
                </Item>
                <Item last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry={true}
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
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#0b3c5d",
    justifyContent: "flex-start"
  },
  formStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15
  }
});
