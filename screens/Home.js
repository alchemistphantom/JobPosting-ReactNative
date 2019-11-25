import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  menuContent: {
    color: '#000',
    fontWeight: 'bold',
    padding: 2,
    fontSize: 20,
  },
});
