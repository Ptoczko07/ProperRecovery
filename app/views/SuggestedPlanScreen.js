import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  ListItem,
  List,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

var listOfPrograms = [
  {
    planName: "Dislocated Shoulder",
    listOfExercises: [
      {
        name: "Shoulder Flexion (lying down)",
        days: "MTF"
      },
      {
        name: "Child's Pose",
        days: "MRFU"
      },
      {
        name: "Thread the Needle",
        days: "MSWF"
      },
      {
        name: "Elbow-Out Rotator Stretch",
        days: "MWF"
      },
      {
        name: "Cross-Body Shoulder Stretch",
        days: "MTWRF"
      }
    ]
  },
  {
    planName: "Groin Strain",
    listOfExercises: [
      {
        name: "Glute Bridge",
        days: "MTF"
      },
      {
        name: "Hip Rotations (Push-up Position)",
        days: "MRFU"
      },
      {
        name: "Jump and Reach",
        days: "MSWF"
      },
      {
        name: "Seated Butterfly Stretch",
        days: "MWF"
      },
      {
        name: "Seated Straddle Stretch",
        days: "MTWRF"
      }
    ]
  },
  {
    planName: "Knee Tear",
    listOfExercises: [
      {
        name: "Lunging Hip Flexor Stretch",
        days: "MTF"
      },
      {
        name: "Standing Hamstring Stretch",
        days: "MRFU"
      },
      {
        name: "Calf Stretch",
        days: "MSWF"
      },
      {
        name: "Kneeling Quad Stretch",
        days: "MWF"
      },
      {
        name: "Side Lunge",
        days: "MTWRF"
      }
    ]
  },
  {
    planName: "Lat Pull",
    listOfExercises: [
      {
        name: "Active Lat Stretch",
        days: "MTF"
      },
      {
        name: "Foam Roll Your Lats",
        days: "MRFU"
      },
      {
        name: "90 Lat Stretch",
        days: "MSWF"
      },
      {
        name: "Stability Ball Shoulder Stabilization",
        days: "MWF"
      },
      {
        name: "Downward-facing Dog",
        days: "MTWRF"
      }
    ]
  },
  {
    planName: "Pec Tear",
    listOfExercises: [
      {
        name: "Side Lying Parallel Arm Chest Stretch",
        days: "MTF"
      },
      {
        name: "Wall Stretch",
        days: "MRFU"
      },
      {
        name: "Elbow Wrap Stretch",
        days: "MSWF"
      },
      {
        name: "Back Bend Stretch",
        days: "MWF"
      },
      {
        name: "Stability Ball Stretch",
        days: "MTWRF"
      }
    ]
  },
  {
    planName: "Shoulder Tear",
    listOfExercises: [
      {
        name: "Barbell Push Press",
        days: "MTF"
      },
      {
        name: "Dumbbell Incline Row",
        days: "MRFU"
      },
      {
        name: "Arnold Press",
        days: "MSWF"
      },
      {
        name: "Dumbbell Lateral Raise",
        days: "MWF"
      },
      {
        name: "Standing Military Press",
        days: "MTWRF"
      }
    ]
  }
];

export default class SuggestedPlanScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{ backgroundColor: "#1d2731" }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 2, alignItems: "center" }}>
          <Title style={{ color: "white" }}>Suggested Plans</Title>
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
    var programList = [];
    var i = 0;
    listOfPrograms.forEach(program => {
      programList.push(
        <ListItem key={i++}>
          <Left>
            <Text>{program.planName}</Text>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.push("PremadePlanScreen", {
                  workOutPlan: program
                });
              }}
            >
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </ListItem>
      );
    });

    return (
      <Container>
        <View style={styles.inputBox}>
          <Form>
            <Item floatingLabel last>
              <Label>Enter Injured Body Part Name</Label>
              <Input />
            </Item>
            <Button primary style={styles.searchButton}>
              <Text>Search</Text>
            </Button>
          </Form>
        </View>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
          <List style={styles.list}>{programList}</List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  searchButton: {
    alignSelf: "flex-end"
  },
  list: {
    marginTop: 20
  }
});
