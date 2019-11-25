/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  CardItem,
  Card,
  FooterTab,
  Button,
  Footer,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CompFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Footer style={{color: '##fff', borderRadius: 5}}>
          <FooterTab>
            <Button vertical>
              <Icon {...props} name="home" />
              <Text style={style.text}>Jobs</Text>
            </Button>
            <Button vertical>
              <Icon {...props} name="file-compare" />
              <Text style={style.text}>Companies</Text>
            </Button>
            <Button vertical active>
              <Icon {...props} active name="zip-box" />
              <Text style={style.text}>Categories</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const props = {
  size: 30,
  color: '#fff',
};
const style = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

