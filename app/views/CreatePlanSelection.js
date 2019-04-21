import React, { Component } from "react";
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
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import CustomButton from "../components/customButton";

export default class CreatePlanSelection extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Plans</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.topRow}>
            <CustomButton
              text="Find Suggested Plans"
              onPress={() => {
                this.props.navigation.push("SuggestedPlan");
              }}
            />
          </View>
          <View style={styles.bottomRow}>
            <CustomButton
              text="Create Plan"
              onPress={() => {
                this.props.navigation.push("CreatePlanScreen");
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#9db5b2"
  },
  topRow: {
    backgroundColor: "#0b3c5d",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  bottomRow: {
    flex: 1,
    backgroundColor: "#1d2731",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 27
  }
});
