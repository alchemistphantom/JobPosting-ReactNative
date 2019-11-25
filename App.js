import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
//page
import Register from './screens/Register';
import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';
import menuTab from './screens/tab';
import store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
const StackNavigation = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    Login: {screen: Login},
    MenuTab: {screen: menuTab},
    Register: {screen: Register},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(StackNavigation);
