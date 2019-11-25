/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Col,
  Grid,
  Row,
  Label,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginUser} from '../redux/action/user';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hidePassword: true,
      username: '',
      password: '',
    };
  }
  goToRegister = () => {
    this.props.navigation.navigate('Register');
  };
  goToHome = () => {
    this.props.navigation.navigate('MenuTab');
  };
  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  usernameHandle = username => {
    this.setState({username});
    console.log(username);
  };

  passwordHandle = password => {
    this.setState({password});
    console.log(password);
  };

  handleSubmit = () => {
    let username = this.state.username;
    let password = this.state.password;

    this.getLogin(username, password)
      .then(res => {
        alert('Success to Login');
        // console.log(res.data)
        // console.log('ini data ' + res.data);
      })
      .catch(err => {
        alert('Email or Password Wrong' + err);
        console.log(err);
      });
  };
  getLogin = async (username, password) => {
    await this.props.dispatch(loginUser(username, password));
  };

  render() {
    console.log(this.props.user.data);
    const {username, password} = this.state;
    return (
      <Container>
        <LinearGradient
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#2b5876', '#4e4376']}>
          <Content>
            <Form style={style.form}>
              <Item floatingLabel>
                <Label style={style.input}>Username</Label>
                <Input
                  autoFocus={true}
                  style={style.input}
                  autoCompleteType="email"
                  onChangeText={this.usernameHandle}
                  value={username}
                  autoCorrect={true}
                  textContentType="emailAddress"
                  maxLength={30}
                  onCha
                  placeholderTextColor="#fff"
                />
              </Item>

              <Item floatingLabel>
                <Label style={style.input}>Password</Label>

                <Input
                  keyboardType="default"
                  autoFocus={false}
                  {...props}
                  onChangeText={this.passwordHandle}
                  value={password}
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
                  this.goToHome();
                }}>
                <Text style={style.textButton}>Login</Text>
              </Button>
              <Grid>
                <Row>
                  <Col>
                    <Button
                      transparent
                      onPress={() => alert('dalam Pengembangan')}>
                      <Text style={style.text}>Lupa Kata Sandi?</Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button transparent onPress={this.goToRegister}>
                      <Text style={style.text}>Bergabung Sekarang</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </Form>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              color="#fff"
              animating={this.state.loading}
            />
          </Content>
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
  },
  form: {
    margin: 20,
    color: '#fff',
  },
  input: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    flex: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

const props = {
  maxLength: 30,
  placeholderTextColor: '#fff',
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(Login);
