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
import CustomButton from "../components/customButton";

var days = "";

export default class AddExerciseScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => {
              console.log(days);
              navigation.navigate("CreatePlanScreen", { days: days });
            }}
          >
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
  state = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  };

  createStringOfDays() {
    if (this.state.monday) {
      days = days + "M";
    }
    if (this.state.tuesday) {
      days = days + "T";
    }
    if (this.state.wednesday) {
      days = days + "W";
    }
    if (this.state.thursday) {
      days = days + "R";
    }
    if (this.state.friday) {
      days = days + "F";
    }
    if (this.state.saturday) {
      days = days + "S";
    }
    if (this.state.sunday) {
      days = days + "U";
    }
  }

  render() {
    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <H1 style={{ margin: 5 }}>Select Days</H1>
          <ListItem>
            <CheckBox
              checked={this.state.monday}
              onPress={() => this.setState({ monday: !this.state.monday })}
              color="red"
            />
            <Body>
              <Text>Monday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.tuesday}
              onPress={() => this.setState({ tuesday: !this.state.tuesday })}
              color="blue"
            />
            <Body>
              <Text>Tuesday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.wednesday}
              onPress={() =>
                this.setState({ wednesday: !this.state.wednesday })
              }
              color="red"
            />
            <Body>
              <Text>Wednesday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.thursday}
              onPress={() => this.setState({ thursday: !this.state.thursday })}
              color="blue"
            />
            <Body>
              <Text>Thursday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.friday}
              onPress={() => this.setState({ friday: !this.state.friday })}
              color="red"
            />
            <Body>
              <Text>Friday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.saturday}
              onPress={() => this.setState({ saturday: !this.state.saturday })}
              color="blue"
            />
            <Body>
              <Text>Saturday</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={this.state.sunday}
              onPress={() => this.setState({ sunday: !this.state.sunday })}
              color="red"
            />
            <Body>
              <Text>Sunday</Text>
            </Body>
          </ListItem>
          <Form>
            <Item floatingLabel>
              <Label>Enter Number of Sets</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel last>
              <Label>Enter Number of Reps</Label>
              <Input keyboardType="numeric" />
            </Item>
          </Form>
        </Content>
        <Footer style={{ backgroundColor: "#0b3c5d" }}>
          <CustomButton
            text="Save Exercise"
            onPress={() => {
              this.createStringOfDays();
              //console.log(days);
              //this.navigation.goBack();
            }}
          />
        </Footer>
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
