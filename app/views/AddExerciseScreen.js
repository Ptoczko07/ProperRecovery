import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  CheckBox,
  ListItem,
  Button,
  Left,
  H1,
  Right,
  Body,
  Icon,
  Form,
  Label,
  Item,
  Input,
  Text,
  Footer
} from "native-base";
import CustomButton from '../components/customButton';

export default class AddExerciseScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
        <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
        </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title>(Exercise Name)</Title>
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
        <H1 style={{margin: 5}}>Select Days</H1>
        <ListItem>
            <CheckBox checked={true} color="red"/>
            <Body>
              <Text>Monday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="blue"/>
            <Body>
              <Text>Tuesday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Wednesday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="blue"/>
            <Body>
              <Text>Thursday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Friday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="blue"/>
            <Body>
              <Text>Saturday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Sunday</Text>
            </Body>
          </ListItem>
          <Form>
            <Item floatingLabel>
              <Label>Enter Number of Sets</Label>
              <Input keyboardType = "numeric"/>
            </Item>
            <Item floatingLabel last>
              <Label>Enter Number of Reps</Label>
              <Input keyboardType = "numeric"/>
            </Item>
          </Form>
        </Content>
        <Footer>
        <CustomButton 
          text    = "Save Exercise"
          onPress = {() => { alert("save program") }}
        />
        </Footer>
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
