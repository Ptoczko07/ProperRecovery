import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class customButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress = {() => onPress()}
		  >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

customButton.propTypes = {
  text   : PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize      : 23,
    color         : '#ffffff',
    textAlign     : 'center',
    justifyContent: 'center'
  },
  
  buttonStyle: {
    flex          : 1,
    padding       : 10,
    borderRadius  : 5,
    justifyContent: 'center',
    alignSelf     : "stretch"
  }
});

export default customButton;