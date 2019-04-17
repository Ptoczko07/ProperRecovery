import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  ListItem,
  List,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

var listOfPrograms = [
  {
    "name": "Dislocated Shoulder",
  },
  {
    "name": "Groin Strain",
  },
  {
    "name": "Knee Tear",
  },
  {
    "name": "Lat Pull",
  },
  {
    "name": "Pec Tear",
  },
  {
    "name": "Shoulder Impingment",
  },
  {
    "name": "Shoulder Tear",
  },
]

export default class SuggestedPlanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title>Suggested Plans</Title>
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
    var programList = [];
    var i           = 0;
    listOfPrograms.forEach( (program) => {
      programList.push(
        <ListItem key={i++}>
          <Left>
            <Text>{program.name}</Text>
          </Left>
          <Right>
            <Button transparent onPress={() => {this.props.navigation.push("PremadePlanScreen"); }}>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </ListItem>
      );
    });
    
    return (
      <Container>
        <View style={styles.inputBox}>
            <Form>
              <Item floatingLabel last>
                <Label>Enter Injured Body Part Name</Label>
                <Input />
              </Item>
              <Button primary style={styles.searchButton}>
                <Text>Search</Text>
              </Button>
            </Form>
          </View>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <List style={styles.list}>
            {programList}           
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: "#ffffff"
  },
  searchButton: {
    alignSelf: "flex-end"
  },
  list: {
    marginTop: 20
  }
});