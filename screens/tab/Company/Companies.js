/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Menu, Provider} from 'react-native-paper';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import IconMe from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Header,
  Row,
  Col,
  Grid,
  Icon,
  Fab,
  Title,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {fetch} from '../../../redux/action/Companies';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isSearch: false,
      isBookmark: false,
      hasSaved: false,
      active: false,
      data: [],
      visible: false,
    };
  }

  fetchData = async () => {
    await this.props.dispatch(fetch());
  };

  // searchData = async (words) => {
  //   await this.props.dispatch(searchJob(words));
  // };
  updateSearch = search => {
    this.setState({search});
    console.log(search);
  };

  goToDetail = id => {
    this.props.navigation.navigate('DetailJob', {id});
  };
  goToAdd = () => {
    this.props.navigation.navigate('AddUpdateJob');
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.props.data);
    const {search} = this.state;
    return (
      <Provider>
        <Container>
          {!this.state.isSearch && (
            <Header>
              <Body>
                <Title>Company</Title>
              </Body>
              <Right>
                <TouchableOpacity>
                  <Button
                    onPress={() => this.setState({isSearch: true})}
                    transparent>
                    <Icon style={{color: '#fff'}} size={30} name="search" />
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
              {this.props.companies.data.map((o, i) => (
                <Card key={i.toString()} style={style.card}>
                  {/* {console.log(i)} */}
                  <CardItem style={style.card}>
                    <Grid>
                      <Row>
                        <Col size={0}>
                          <Left>
                            <Card
                              style={{
                                marginLeft: -70,
                                marginTop: -35,
                                width: 57,
                                height: 57,
                                borderRadius: 20,
                                shadowColor: '#000',
                                shadowOffset: {
                                  width: 5,
                                  height: 4,
                                },
                                shadowOpacity: 0.9,
                                shadowRadius: 10,

                                elevation: 8,
                              }}>
                              <Thumbnail
                                square
                                style={{
                                  backgroundColor: '#fff',
                                  borderRadius: 10,
                                }}
                                source={{uri: o.logo}}
                              />
                            </Card>
                          </Left>
                        </Col>
                        <Col size={95}>
                          <TouchableOpacity
                            onPress={() => this.goToDetail(o.id)}>
                            <Left>
                              <Body>
                                <CardItem
                                  style={{marginTop: -20}}
                                  header
                                  bordered>
                                  <Text style={style.title}>{o.name}</Text>
                                </CardItem>

                                <Text style={{marginTop: 10}} note>
                                  {o.location}
                                </Text>
                                <Text note>
                                  <IconMe
                                    style={{color: '#f1c40f'}}
                                    size={20}
                                    name="currency-usd"
                                    fontSize={20}
                                  />
                                  {o.description}
                                </Text>
                                {!o.hasApply && (
                                  <View>
                                    <Text style={{color: '#2ecc71'}} note>
                                      <IconMe
                                        size={15}
                                        name="clock"
                                        fontSize={20}
                                      />
                                      Jadilah pelamar awal
                                    </Text>
                                  </View>
                                )}
                              </Body>
                            </Left>
                          </TouchableOpacity>
                        </Col>

                        <Col size={15}>
                          <TouchableOpacity onPress={this.goToAdd}>
                            <IconMe
                              style={{marginRight: 20}}
                              size={20}
                              color="#f1c40f"
                              name="lead-pencil"
                            />
                          </TouchableOpacity>
                        </Col>
                        <Col size={15}>
                          <TouchableOpacity>
                            <IconMe
                              style={{marginRight: 20}}
                              size={20}
                              color="#e74c3c"
                              name="delete"
                            />
                          </TouchableOpacity>
                        </Col>
                      </Row>
                    </Grid>
                  </CardItem>
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
      </Provider>
    );
  }
}
const style = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginLeft: 30,
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
  companies: state.companies,
});
export default connect(mapStateToProps)(Companies);
