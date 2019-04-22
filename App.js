import React, { Component } from "react";
import { AppLoading } from "expo";
import Navigation from "./app/components/Navigation.js";
import { YellowBox } from 'react-native';
import Firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyCNioRAajicsFvxYcgLJvNLcB-5vLPqUlY",
//   authDomain: "properrecovery.firebaseapp.com",
//   databaseURL: "https://properrecovery.firebaseio.com",
//   projectId: "properrecovery",
//   storageBucket: "properrecovery.appspot.com",
//   messagingSenderId: "278567486317"
// };
//
// let app = Firebase.initializeApp(config);
// //export const db = app.database();

YellowBox.ignoreWarnings(['Setting a timer']);

export default class ProperRecovery extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto       : require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons     : require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return <Navigation />;
  }
}
