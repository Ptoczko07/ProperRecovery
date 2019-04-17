import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  H1,
  Thumbnail,
  CheckBox,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Footer,
  Item,
  Label,
  Input,
  Form,
  List,
  ListItem,
  Text
} from "native-base";
import CustomButton from '../components/customButton';

export default class CreatePlanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title>Create A Plan</Title>
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
          <Form>
            <Item inlineLabel>
              <Label>Plan Name</Label>
              <Input />
            </Item>

            <Item inlineLabel>
            <Label>Exercise Name</Label>
            <Input/>
            <Button transparent onPress = {() => { this.props.navigation.push("AddExerciseScreen"); }}>
              <Text>
                Add
              </Text>
            </Button>
            </Item>
          </Form>
          <Text style={ styles.text }>Selected Exercises: </Text>
          <List>
            <ListItem>
              <Body>
                <Text>Arm Extensions</Text>
              </Body>
              
              <Right>
                <Text>M T W Th F S Su</Text>
              </Right>     
            </ListItem>
          </List>
        </Content>

        <Footer style={{backgroundColor: "#0b3c5d"}}>
        <CustomButton 
          text    = "Save Program"
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
    backgroundColor: "#ffffff",
  },
  text:{
    alignItems: 'center',
    marginTop : 20,
    marginLeft: 12,
    fontSize  : 22
  }
  
});
