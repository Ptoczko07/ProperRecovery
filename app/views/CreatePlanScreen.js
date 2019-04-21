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
import { StackActions, NavigationEvents } from "react-navigation";

var workOutPlan = {
  planName: "",
  listOfExercises: []
};

var planName = "";
var exerciseName = "";
var days = "";
let uploadPlan = plan => {
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

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  addExerciseToList() {
    workOutPlan.planName = planName;
    workOutPlan.listOfExercises.push({
      name: exerciseName,
      days: days
    });
    console.log(workOutPlan);
    this.forceUpdate();
    //this.props.navigation.push("AddExerciseScreen");
  }

  SaveProgram() {
    uploadPlan();
  }

  updateEverything() {
    console.log("getting to udpate everything");
    console.log(days);
    this.forceUpdate();
  }

  //using this to wipe state when we move between pages
  componentDidMount() {
    workOutPlan = {
      planName: "",
      listOfExercises: []
    };
    planName = "";
    texerciseName = "";

    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      //console.log("back at create a plan");
      days = this.props.navigation.getParam("days", "");
      if (days != "") {
        this.addExerciseToList();
      }
    });

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
          <Title style={{ color: "white" }}>Create A Plan</Title>
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
    //console.log("back at create a plan");
    //days = this.props.navigation.getParam("days", "");
    //console.log(days);
    //this.addExerciseToList();

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
              {/*<Input onChangeText={name => (currPlanName = name)} />*/}
              <Input onChangeText={name => (planName = name)} />
            </Item>

            <Item inlineLabel>
              <Label>Exercise Name</Label>
              <Input onChangeText={name => (exerciseName = name)} />
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.push("AddExerciseScreen");
                  //this.addExerciseToList();
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
