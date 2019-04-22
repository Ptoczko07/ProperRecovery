import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Fab,
  Tabs,
  Tab,
  ListItem,
  List,
  CheckBox,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import { db } from "../src/config";
// we want to read from the variable now
let currentPlan     = db.ref("/planList");
let currentPlanName = db.ref("/currPlan");
    listOfExercises = [];

export default class WeeklyScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "false"
    };
  }

  // here we will read the data and massage it to be displayed on the calendar
  //code snippet adapted from this site
  //https://blog.jscrambler.com/integrating-firebase-with-react-native/
  componentDidMount() {
    //get the plan name that we want first
    var currPlanName = "";
    currentPlanName.on("value", snapshot => {
      let data         = snapshot.val();
          currPlanName = data.name;
    });

    // parse the workout tree until we find what we want
    currentPlan.on("value", snapshot => {
      let data   = snapshot.val();
      let object = Object.values(data);
      object.forEach(plan => {
        if (plan.workOutPlan.planName == currPlanName) {
          listOfExercises = plan.workOutPlan.listOfExercises;
        }
      });
      this.setState(listOfExercises);
    });
  }

  ExerciseListParser() {}

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Weekly Schedule</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  });

  appendListItem(i, exercise) {
    //exerciseList.monday.push(
    return (
      <ListItem key={i}>
        <CheckBox
          checked = {false}
          onPress = {() => (this.checked = !this.checked)}
          color   = "red"
        />
        <Body>
          <Text>{exercise.name} - 3 Sets of 10 Reps</Text>
        </Body>
      </ListItem>
    );
  }
  render() {
    //create list component but we should really move this to a separate function
    //someone else do it im tired

    var exerciseList = {
      monday   : [],
      tuesday  : [],
      wednesday: [],
      thursday : [],
      friday   : [],
      saturday : [],
      sunday   : []
    };

    var i = 0;
    listOfExercises.forEach(exercise => {
      for (dayLetter of exercise.days) {
        console.log(i);
        if (dayLetter == "M") {
          exerciseList.monday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "T") {
          exerciseList.tuesday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "W") {
          exerciseList.wednesday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "R") {
          exerciseList.thursday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "F") {
          exerciseList.friday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "S") {
          exerciseList.saturday.push(this.appendListItem(i, exercise));
        }
        if (dayLetter == "U") {
          exerciseList.sunday.push(this.appendListItem(i, exercise));
        }
      }
      i = i + 1;
    });

    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <Tabs>
            <Tab heading="M" style={styles.tab}>
              <Text style={styles.text}>Monday</Text>
              <List>{exerciseList.monday}</List>
            </Tab>

            <Tab heading="T" style={styles.tab}>
              {/* <Tab2 /> */}
              <Text style={styles.text}>Tuesday</Text>
              <List>{exerciseList.tuesday}</List>
            </Tab>

            <Tab heading="W" style={styles.tab}>
              {/* <Tab3 /> */}
              <Text style={styles.text}>Wednesday</Text>
              <List>{exerciseList.wednesday}</List>
            </Tab>

            <Tab heading="Th" style={styles.tab}>
              {/* <Tab3 /> */}
              <Text style={styles.text}>Thursday</Text>
              <List>{exerciseList.thursday}</List>
            </Tab>

            <Tab heading="F" style={styles.tab}>
              {/* <Tab3 /> */}
              <Text style={styles.text}>Friday</Text>
              <List>{exerciseList.friday}</List>
            </Tab>

            <Tab heading="S" style={styles.tab}>
              {/* <Tab3 /> */}
              <Text style={styles.text}>Saturday</Text>
              <List>{exerciseList.saturday}</List>
            </Tab>

            <Tab heading="Su" style={styles.tab}>
              {/* <Tab3 /> */}
              <Text style={styles.text}>Sunday</Text>
              <List>{exerciseList.sunday}</List>
            </Tab>
          </Tabs>
          <Fab
            direction      = "up"
            containerStyle = {{}}
            style          = {{ backgroundColor: "#5067FF" }}
            position       = "bottomRight"
            onPress        = {() =>
              alert("set the checkboxes for each week to unchecked")
            }
          >
            <Icon name="md-refresh" />
          </Fab>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: "#9db5b2"
  },
  tab: {
    marginTop: 12
  },
  text: {
    fontSize  : 24,
    marginLeft: 10
  },
  content: {
    flex           : 1,
    backgroundColor: "#ffffff"
  }
});
