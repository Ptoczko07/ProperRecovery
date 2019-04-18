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
  CheckBox,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

export default class WeeklyScheduleScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'false'
    };
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
          <Title>Weekly Schedule</Title>
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
        <Tabs>
          <Tab heading="M" style={ styles.tab }>
            <Text style={ styles.text }>Monday</Text>
            <ListItem>
            <CheckBox checked={true} onPress={()=> this.checked = !this.checked } color="red"/>
            <Body>
              <Text>Exercise 1</Text>
            </Body>
            </ListItem>
            <ListItem>
            <CheckBox checked={false} color="blue"/>
            <Body>
              <Text>Exercise 2</Text>
            </Body>
            </ListItem>
            <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Exercise 3</Text>
            </Body>
          </ListItem>
        </Tab>

          <Tab heading="T" style={ styles.tab }>
            {/* <Tab2 /> */}
            <Text style={ styles.text }>Tuesday</Text>
          </Tab>

          <Tab heading="W" style={ styles.tab }>
            {/* <Tab3 /> */}
            <Text style={ styles.text }>Wednesday</Text>
          </Tab>

          <Tab heading="Th" style={ styles.tab }>
            {/* <Tab3 /> */}
            <Text style={ styles.text }>Thursday</Text>
          </Tab>

          <Tab heading="F" style={ styles.tab }>
            {/* <Tab3 /> */}
            <Text style={ styles.text }>Friday</Text>
          </Tab>

          <Tab heading="S" style={ styles.tab }>
            {/* <Tab3 /> */}
            <Text style={ styles.text }>Saturday</Text>
          </Tab>

          <Tab heading="Su" style={ styles.tab }>
            {/* <Tab3 /> */}
            <Text style={ styles.text }>Sunday</Text>
          </Tab>

        </Tabs>
        <Fab
          direction      = "up"
          containerStyle = {{ }}
          style          = {{ backgroundColor: '#5067FF' }}
          position       = "bottomRight"
          onPress        = {() => alert('set the checkboxes for each week to unchecked')}>
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
    marginTop: 12,
  },
  text: {
    fontSize  : 24,
    marginLeft: 10
  },
  content: {
    flex           : 1,
    backgroundColor: "#ffffff"
  },
});
