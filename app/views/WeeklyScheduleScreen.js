import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  H1,
  Thumbnail,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import CustomButton from '../components/customButton';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title>Proper Recovery</Title>
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
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: "#9db5b2"
  }
});
