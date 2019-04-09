import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, H1, Card, CardItem, Thumbnail, Image, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class CreatePlanSelection extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#1d2731'}}>
          <Left style={{flex: 1}}>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{flex:2,alignItems:'center'}}>
            <Title>Plans</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content} contentContainerStyle={{ flexGrow: 1}}>
          <View style={styles.topRow}>
            <Text style={ styles.text }>
                Find Suggested Plans
            </Text>
          </View>
          <View style={styles.bottomRow}>
          <Text style={ styles.text }>
                Create Plan
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex           : 1,
    backgroundColor: '#9db5b2'
  },
  topRow: {
    backgroundColor: '#0b3c5d',
    alignItems     : 'center',
    justifyContent : 'center',
    flex           : 1
  },
  
  bottomRow: {
    flex           : 1,
    backgroundColor: '#1d2731',
    justifyContent : 'center',
    alignItems     : 'center',
  },
  text: {
    color   : 'white',
    fontSize: 27
  }

});