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
import CustomButton from "../components/customButton";

//data base connection
import { db } from "../src/config";
// we want to read from the variable now
let currentPlan = db.ref("/currPlan");

export default class HomeScreen extends Component {
  state = {
    plan: ""
  };
  // this will run before render and we use it to read stuff from the database
  //code snippet adapted from this site
  //https://blog.jscrambler.com/integrating-firebase-with-react-native/
  componentDidMount() {
    currentPlan.on("value", snapshot => {
      let data   = snapshot.val();
      let object = Object.values(data);
      let plan   = data.name;
      this.setState({ plan });
    });
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }} />
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Proper Recovery</Title>
        </Body>
        <Right style={{ flex: 1  }}>
          <Button transparent >

            <Icon name="home" />
            
          </Button>
        </Right>
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.topRow}>
            <Thumbnail
              large
              source={{
                uri: 
                  "https://www.latimes.com/resizer/2T803oRoQQQpAEl4xpdNaqZOdUI=/800x0/www.trbimg.com/img-5cb41179/turbine/la-1555304820-5mnu87v1cd-snap-image"
              }}
            />
            <H1 style={{ paddingTop: 20, color: "white" }}>
              Welcome Back, Jon!
            </H1>
            <Button
              block
              info
              style   = {styles.continueButton}
              onPress = {() => {
                this.props.navigation.push("WeeklyScheduleScreen");
              }}
            >
              <Text style={styles.text}>{this.state.plan} Plan</Text>
            </Button>
          </View>
          <View style={styles.middleRow}>
            <CustomButton
              text    = "Current Plans"
              onPress = {() => {
                this.props.navigation.push("SelectPlanScreen");
              }}
            />
          </View>
          <View style={styles.bottomRow}>
            <CustomButton
              text    = "Add A Plan"
              onPress = {() => {
                this.props.navigation.push("CreatePlanSelection");
              }}
            />
          </View>
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
  topRow: {
    backgroundColor: "#0b3c5d",
    alignItems     : "center",
    flexDirection  : "column",
    padding        : 25,
    flex           : 2
  },
  middleRow: {
    flex           : 1,
    justifyContent : "center",
    alignItems     : "center",
    backgroundColor: "#328cc1"
  },
  bottomRow: {
    flex           : 1,
    backgroundColor: "#1d2731",
    justifyContent : "center",
    alignItems     : "center",
    color          : "white"
  },
  continueButton: {
    marginTop: 30
  },
  text: {
    color    : "white",
    textAlign: "center"
  }
});
