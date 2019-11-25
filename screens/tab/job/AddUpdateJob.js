/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {
  Container,
  Content,
  Card,
  Item,
  CardItem,
  Button,
  Picker,
  Icon,
  Input,
} from 'native-base';
import {
  TextInput,
  HelperText,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AddUpdateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selected2: undefined,
      visible: false,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }
  _showModal = () => this.setState({visible: true});
  _hideModal = () => this.setState({visible: false});

  goToCancel = () => {
    this.props.navigation.navigate('ListJob');
  };
  render() {
    const {visible} = this.state;
    return (
      <Container>
        <Provider>
          <Image
            style={{width: 'auto', height: 80}}
            source={{
              uri: 'https://www.sixpathtechnologies.com/blog/images/h1.jpg',
            }}
          />
          <Content style={{marginTop: -20, margin: 20}}>
            <Card style={{padding: 20}}>
              <View>
                <TextInput
                  label="Name"
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                />
                <HelperText
                  type="error"
                  visible={!this.state.text.includes('@')}>
                  Email address is invalid!
                </HelperText>
              </View>

              <View>
                <TextInput
                  label="Deskripsi"
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                />
                <HelperText type="error" visible={this.state.text.length == 0}>
                  Harus Di isi
                </HelperText>
              </View>

              <View>
                <Item picker style={{width: 350}}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    placeholder="Select your SIM"
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="IT &#x26; Informasi" value="key0" />
                    <Picker.Item label="Perbankan" value="key1" />
                  </Picker>
                  <TouchableOpacity>
                    <Button
                      onPress={this._showModal}
                      transparent
                      style={{width: 50}}>
                      <Icon name="add" />
                    </Button>
                  </TouchableOpacity>
                </Item>
              </View>

              <Portal>
                <Modal visible={visible} onDismiss={this._hideModal}>
                  <Card
                    style={{
                      color: '#fff',
                      height: 100,
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    <CardItem bordered>
                      <Text>Tambah Kategori</Text>
                    </CardItem>
                    <CardItem style={{justifyContent: 'flex-end'}}>
                      <Input placeholder="nama kategori..." />
                    </CardItem>
                    <CardItem bordered>
                      <Button style={{justifyContent: 'flex-end'}}>
                        <Text>Tambah Kategori</Text>
                      </Button>
                    </CardItem>
                  </Card>
                </Modal>
              </Portal>

              <View>
                <TextInput
                  label="Gaji"
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                />
                <HelperText type="error" visible={this.state.text.length == 0}>
                  Harus Di isi
                </HelperText>
              </View>

              <View>
                <Item picker style={{width: 350}}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    placeholder="Select your SIM"
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="Tokopedia" value="key0" />
                    <Picker.Item label="Bukalapak" value="key1" />
                    <Picker.Item label="Bank BRI" value="key2" />
                    <Picker.Item label="Bank Mandiri" value="key3" />
                  </Picker>
                  <TouchableOpacity>
                    <Button
                      onPress={this._showModal}
                      transparent
                      style={{width: 50}}>
                      <Icon name="add" />
                    </Button>
                  </TouchableOpacity>
                </Item>
              </View>
            </Card>
            <CardItem style={style.itemCard}>
              <Button onPress={ this.goToCancel()} style={style.buttonCancel}>
                <Text style={style.text}>Batal</Text>
              </Button>
              <Button style={style.buttonSimpan}>
                <Text style={style.text}>Simpan</Text>
              </Button>
            </CardItem>
          </Content>
        </Provider>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  buttonSimpan: {
    backgroundColor: '#27ae60',
    width: 100,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonCancel: {
    backgroundColor: '#e74c3c',
    width: 100,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  itemCard: {
    alignContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
