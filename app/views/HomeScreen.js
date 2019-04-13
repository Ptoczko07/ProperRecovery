import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  H1,
  TouchableOpacity,
  Card,
  CardItem,
  Thumbnail,
  Image,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import CustomButton from '../components/customButton';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#1d2731" }}>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 2, alignItems: "center" }}>
            <Title>Proper Recovery</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.topRow}>
            <Thumbnail
              large
              source={{
                uri: 
                  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1031&q=80"
              }}
            />
            <H1 style={{ paddingTop: 20, color: "white" }}>
              Welcome Back, (Name)!
            </H1>
            <Button block info style={styles.continueButton}>
              <Text style={styles.text}>Continue with (Schedule Name)</Text>
            </Button>
          </View>
          <View style={styles.middleRow}>
          <CustomButton 
            text    = "Select From Current Plans"
            onPress = {() => { alert("Hello");}}
          />
          </View>
          <View style={styles.bottomRow}>
          <CustomButton 
            text    = "Create A New Plan"
            onPress = {() => { this.props.navigation.push("CreatePlan") }}
          />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: "#9db5b2"
  },
  topRow: {
    backgroundColor: "#0b3c5d",
    alignItems     : "center",
    flexDirection  : "column",
    padding        : 25,
    flex           : 2
  },
  middleRow: {
    flex           : 1,
    justifyContent : "center",
    alignItems     : "center",
    backgroundColor: "#328cc1"
  },
  bottomRow: {
    flex           : 1,
    backgroundColor: "#1d2731",
    justifyContent : "center",
    alignItems     : "center",
    color          : "white"
  },
  continueButton: {
    // alignItems: 'center'
    marginTop: 30
  },
  text: {
    color: "white"
  }
});
