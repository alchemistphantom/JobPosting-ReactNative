/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import IconMe from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Header,
  Title,
  Fab,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fetch} from '../../../redux/action/categories';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isSearch: false,
      isBookmark: false,
      hasSaved: false,
      active: false,
      data: [],
    };
  }
  fetchData = async () => {
    await this.props.dispatch(fetch());
  };
  updateSearch = search => {
    this.setState({search});
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log(this.props.categories.data);
    const {search} = this.state;
    return (
      <Container>
        {!this.state.isSearch && (
          <Header>
            <Left>
              <Button transparent>
                <Icon size={30} style={{color: '#fff'}} name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Category</Title>
            </Body>
            <Right>
              <TouchableOpacity>
                <Button
                  onPress={() => this.setState({isSearch: true})}
                  transparent>
                  <Icon style={{color: '#fff'}} size={30} name="magnify" />
                </Button>
              </TouchableOpacity>
            </Right>
          </Header>
        )}

        {this.state.isSearch && (
          <SearchBar
            style={{marginLeft: 20}}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            onEndEditing={() => this.setState({isSearch: false})}
            onTouchCancel={() => this.setState({isSearch: false})}
            platform="android"
            autoFocus={true}
          />
        )}
        <Content style={{backgroundColor: '#DBDBDB'}}>
          <ScrollView>
            {this.props.categories.data.map((o, i) => (
              <Card key={i.toString()} style={style.card}>
                <TouchableOpacity>
                  <Body>
                    <CardItem header bordered>
                      <Text style={style.title}>{o.name}</Text>
                    </CardItem>
                  </Body>
                </TouchableOpacity>
                <Right>
                  <CardItem>
                    <TouchableOpacity onPress={this.goToAdd}>
                      <IconMe
                        style={{marginRight: 20}}
                        size={20}
                        color="#f1c40f"
                        name="lead-pencil"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <IconMe
                        style={{marginRight: 20}}
                        size={20}
                        color="#e74c3c"
                        name="delete"
                      />
                    </TouchableOpacity>
                  </CardItem>
                </Right>
              </Card>
            ))}
          </ScrollView>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={this.goToAdd}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
const mapStateToProps = state => ({
  categories: state.categories,
});
export default connect(mapStateToProps)(Category);
