import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail
} from "native-base";

//data base connection
import { db } from "../src/config";

// added by manny
let currentPlanName = db.ref("/currPlan");
let planList = db.ref("/planList");
listOfPlanNames = [];

// added by manny
let setCurrentPlan = plan => {
  db.ref("/currPlan").update({
    name: plan
  });
};
//

export default class SelectPlanSelection extends Component {
  state = {
    plan: ""
  };
  selectPlan(plan) {
    setCurrentPlan(plan);
  }

  // fetch the names of all the plans
  componentDidMount() {
    listOfPlanNames = [];
    planList.on("value", snapshot => {
      let data = snapshot.val();
      let object = Object.values(data);
      object.forEach(plan => {
        listOfPlanNames.push(plan.workOutPlan.planName);
      });
      console.log(listOfPlanNames);
      this.setState(listOfPlanNames);
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
          <Title style={{ color: "white" }}>Plans List</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  });

  appendListItem(planName, i) {
    return (
      <ListItem key={i} thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                "https://www.naplesorthopedic.com/wp-content/uploads/2015/01/shoulder.jpg"
            }}
          />
        </Left>
        <Body>
          <Text>{planName}</Text>
          <Text note numberOfLines={1}>
            April 20, 2019
          </Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              this.selectPlan(planName);
              this.props.navigation.push("HomeScreen");
            }}
          >
            <Text>Select</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    UIplanList = [];
    i = 0;
    listOfPlanNames.forEach(planName => {
      UIplanList.push(this.appendListItem(planName, i));
      i++;
    });
    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <List style={styles.list}>{UIplanList}</List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
