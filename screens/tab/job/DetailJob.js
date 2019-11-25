/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, ScrollView, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Card,
  CardItem,
  Button,
  Thumbnail,
  Body,
  Left,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fetch} from '../../../redux/action/job';

class DetailJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: props.navigation.getParam('id'),
    };
  }

  fetchData = async () => {
    await this.props.dispatch(fetch());
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isLoading && <Text>Loading...</Text>}
        {!this.props.isLoading &&
          this.props.job.data
            .filter(data => data.id === this.state.id)
            .map((v, i) => (
              <Container>
                {console.log(this.props.job.data)}
                <Image
                  style={{width: 'auto', height: 80}}
                  source={{
                    uri:
                      'https://www.sixpathtechnologies.com/blog/images/h1.jpg',
                  }}
                />
                <Card style={{margin: 0}}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Thumbnail
                          square
                          source={{uri: v.logo}}
                          style={{
                            marginTop: -60,
                            margin: 10,
                            padding: 4,
                            borderColor: '#000',
                            borderWidth: 2,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 0},
                            shadowRadius: 5,
                            shadowOpacity: 1,
                            backgroundColor: '#fff',
                          }}
                          large
                        />

                        <Text style={style.title}>{v.name}</Text>
                        <Text note>{v.company}</Text>
                        <Text note>{v.location}</Text>
                        <Text style={{color: '#2ecc71'}} note>
                          <Icon size={15} name="clock" fontSize={20} />
                          Jadilah pelamar awal
                        </Text>
                        <Text note>{v.date_added}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button bordered l style={style.button}>
                        <Text
                          style={{
                            color: '#2980b9',
                            fontWeight: 'bold',
                          }}>
                          SIMPAN
                        </Text>
                      </Button>
                    </Left>
                    <Button style={style.button}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        APPLY
                      </Text>
                    </Button>
                  </CardItem>
                </Card>
                <ScrollView>
                  <Card>
                    <CardItem header bordered>
                      <Text style={style.title}>Deskripsi</Text>
                    </CardItem>
                    <CardItem footer bordered>
                      <Body>
                        <Text>{v.description}</Text>
                      </Body>
                    </CardItem>
                    <TouchableOpacity>
                      <CardItem
                        style={{alignContent: 'center'}}
                        footer
                        bordered>
                        <Text style={{alignContent: 'center'}}>
                          Lihat Lainnya
                        </Text>
                      </CardItem>
                    </TouchableOpacity>
                    <CardItem header bordered>
                      <Text style={style.title}>Salary</Text>
                    </CardItem>
                    <CardItem footer bordered>
                      <Body>
                        <Text>{v.salary}</Text>
                      </Body>
                    </CardItem>
                    <TouchableOpacity>
                      <CardItem
                        style={{alignContent: 'center'}}
                        footer
                        bordered>
                        <Text style={{alignContent: 'center'}}>
                          Lihat Lainnya
                        </Text>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>
                </ScrollView>
              </Container>
            ))}
      </React.Fragment>
    );
  }
}
const style = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 5,
    padding: 5,
    shadowRadius: 20,
    shadowOpacity: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    width: 160,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
  },
});
const mapStateToProps = state => ({
  job: state.job,
});
export default connect(mapStateToProps)(DetailJob);
