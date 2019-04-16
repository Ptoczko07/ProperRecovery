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

export default class SelectPlanSelection extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title>Plans List</Title>
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
          <List style={styles.list}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://www.naplesorthopedic.com/wp-content/uploads/2015/01/shoulder.jpg' }} />
            </Left>
            <Body>
              <Text>Shoulder Impingement</Text>
              <Text note numberOfLines={1}>April 20, 2019</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Select</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'https://universityhealthnews.com/wp-content/uploads/knee-pain-remedies.jpg' }} />
            </Left>
            <Body>
              <Text>Leg Pain</Text>
              <Text note numberOfLines={1}>September 12, 2018</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Select</Text>
              </Button>
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
  
});