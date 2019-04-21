import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Card,
  CardItem,
  ListItem,
  List,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import CustomButton from "../components/customButton";
import { db } from "../src/config";

let currentPlanName = db.ref("/currPlan");
let uploadPlan = workOutPlan => {
  db.ref("/planList").push({
    workOutPlan
  });
};
let setCurrentPlan = plan => {
  db.ref("/currPlan").update({
    name: plan
  });
};

export default class PremadePlanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Suggested Plan</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    )
  });

  SaveworkOutPlan(workOutPlan) {
    setCurrentPlan(workOutPlan.planName);
    uploadPlan(workOutPlan);
  }

  render() {
    const { navigation } = this.props;
    const workOutPlan = navigation.getParam("workOutPlan", "");
    console.log(workOutPlan);

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
        <Card transparent>
          <CardItem header>
            <Text>(Plan Name)</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                This is a section that will be filled with information specific
                to the injury
              </Text>
            </Body>
          </CardItem>
        </Card>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        <Text style={styles.text}>Exercise List: </Text>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <List>{exerciseList}</List>
        </Content>

        <Footer style={{ backgroundColor: "#0b3c5d" }}>
          <CustomButton
            text="Add workOutPlan"
            onPress={() => {
              alert("save workOutPlan");
              this.SaveworkOutPlan(workOutPlan);
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
  list: {
    marginTop: 20
  },
  text: {
    marginLeft: 15,
    marginTop: 10
  }
});
