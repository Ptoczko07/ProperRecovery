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
    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
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
          <List style={styles.list}>
            <ListItem>
              <Left>
                <Text>Shoulder Impingment</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dislocated Shoulder</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Shoulder Tear</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
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
  topRow: {
    backgroundColor: "#0b3c5d",
    alignItems     : "center",
    justifyContent : "center",
    flex           : 1
  },

  bottomRow: {
    flex           : 1,
    backgroundColor: "#1d2731",
    justifyContent : "center",
    alignItems     : "center"
  },
  text: {
    color   : "white",
    fontSize: 27
  },
  searchButton: {
    alignSelf: "flex-end"
  },
  list: {
    marginTop: 20
  }
});