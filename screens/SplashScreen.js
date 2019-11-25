import React, {Component} from 'react';
import {Text, StyleSheet, Alert} from 'react-native';
import {Container} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToHome = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    setTimeout(() => {
      this.goToHome();
    }, 3000);
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes

      <Container style={style.container}>
        <LinearGradient
          style={style.container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#2b5876', '#4e4376']}>
          <Text style={style.text}>Job Posting</Text>
        </LinearGradient>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
