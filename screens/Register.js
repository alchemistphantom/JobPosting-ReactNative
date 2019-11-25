/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Button,
  Image,
  Content,
  Form,
  Item,
  Label,
  Input,
  Thumbnail,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <Container style={style.container}>
        <LinearGradient
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#2b5876', '#4e4376']}>
          <Content>
            <Form style={style.form}>
              <Text style={style.text}>
                Bergabunglah dengan Job Posting Sekarang, Gratis
              </Text>
              <Button
                iconLeft
                dark
                style={{
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  margin: 20,
                }}>
                <Thumbnail
                  small
                  style={{marginEnd: 15}}
                  source={require('../img/google.png')}
                />
                <Text
                  style={{color: '#3498db', fontWeight: 'bold', fontSize: 15}}>
                  BERGABUNG DENGAN GOOGLE
                </Text>
              </Button>

              <Item floatingLabel>
                <Label style={style.input}>Username</Label>
                <Input
                  autoFocus={true}
                  style={style.input}
                  autoCompleteType="username"
                  autoCorrect={true}
                  textContentType="username"
                  maxLength={30}
                  placeholderTextColor="#fff"
                />
              </Item>

              <Item floatingLabel>
                <Label style={style.input}>Email</Label>
                <Input
                  style={style.input}
                  autoCompleteType="email"
                  autoCorrect={true}
                  textContentType="emailAddress"
                  maxLength={30}
                  placeholderTextColor="#fff"
                />
              </Item>

              <Item floatingLabel>
                <Label style={style.input}>Password</Label>

                <Input
                  keyboardType="default"
                  autoFocus={false}
                  {...props}
                  style={style.input}
                  secureTextEntry={true}
                />
                <TouchableOpacity>
                  <Icon
                    onPress={() => this.managePasswordVisibility}
                    name="eye-off"
                    size={20}
                  />
                </TouchableOpacity>
              </Item>
              <Button
                bordered
                light
                transparent
                style={style.button}
                onPress={() => {
                  this.setState({loading: true});
                }}>
                <Text
                  onPress={() => alert('Dalam Pengembangan')}
                  style={style.textButton}>
                  Setuju &#x26; Bergabung
                </Text>
              </Button>
              <Text style={{marginTop: 20, color: '#fff', textAlign: 'center'}}>
                Anda menyetujui Perjanjian Pengguna, Kebijakan Privasi dan
                Kebijakan Cookie Job Posting
              </Text>
            </Form>
          </Content>
          <Button
            onPress={this.goToLogin}
            style={{
              backgroundColor: '#0984e3',
              justifyContent: 'center',
              color: '#fff',
            }}>
            <Text style={{color: '#fff'}}>Sudah di Job Posting? Login</Text>
          </Button>
        </LinearGradient>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    height: 'auto',
    width: 'auto',
    flex: 1,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    textTransform: 'uppercase',
  },
  form: {
    margin: 20,
    color: '#fff',
    borderStyle: 'solid',
    borderColor: '#fff',
  },
  input: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    margin: 20,
  },
});

const props = {
  maxLength: 30,
  placeholderTextColor: '#fff',
};
export default Register;
