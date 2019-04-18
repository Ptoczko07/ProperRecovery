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
import CustomButton from "../components/customButton";
import { db } from "../src/config";
import { StackActions } from "react-navigation";

// separate list so we keep UI and state components separate
// both should display same data though
// var listOfExercises = [
//   {
//     name: "Arm Extensions",
//     days: "M W F"
//   }
// ];

var workOutPlan = {
  planName: "",
  listOfExercises: []
};

var planName = "";
var exerciseName = "";

let uploadPlan = plan => {
  //db.ref("/currPlan").remove();
  // db.ref("/currPlan").push({
  //   name: plan
  // });
  db.ref("/planList").push({
    workOutPlan
  });
};

export default class CreatePlanScreen extends Component {
  //this is where the nested plan structure will be located to save a plan to firebase
  state = {
    planName: "",
    listOfExercies: [
      {
        name: "",
        days: ""
      }
    ]
  };

  addExerciseToList() {
    workOutPlan.planName = currPlanName;
    workOutPlan.listOfExercises.push({
      name: exerciseName,
      days: "M W F"
    });
    console.log(workOutPlan);
    this.forceUpdate();
    //this.props.navigation.push("AddExerciseScreen");
  }

  SaveProgram() {
    uploadPlan();
  }

  //using this to wipe state when we move between pages
  componentDidMount() {
    workOutPlan = {
      planName: "",
      listOfExercises: []
    };
    planName = "";
    texerciseName = "";
    this.forceUpdate();
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
    //TODO move this to its own function and stuff
    var exerciseList = [];
    var i = 0;
    workOutPlan.listOfExercises.forEach(exercise => {
      exerciseList.push(
        <ListItem key={i++}>
          <Body>
            <Text>{exercise.name}</Text>
          </Body>

          <Right>
            <Text>{exercise.days}</Text>
          </Right>
        </ListItem>
      );
    });

    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <Form>
            <Item inlineLabel>
              <Label>Plan Name</Label>
              <Input onChangeText={name => (currPlanName = name)} />
            </Item>

            <Item inlineLabel>
              <Label>Exercise Name</Label>
              <Input onChangeText={name => (exerciseName = name)} />
              <Button
                transparent
                onPress={() => {
                  this.addExerciseToList();
                  //this.props.navigation.push("AddExerciseScreen");
                }}
              >
                <Text>Add</Text>
              </Button>
            </Item>
          </Form>
          <Text style={styles.text}>Selected Exercises: </Text>
          <List>{exerciseList}</List>
        </Content>

        <Footer style={{ backgroundColor: "#0b3c5d" }}>
          <CustomButton
            text="Save Program"
            onPress={() => {
              alert("save program");
              this.SaveProgram();
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
  },
  text: {
    alignItems: "center",
    marginTop: 20,
    marginLeft: 12,
    fontSize: 22
  }
});
