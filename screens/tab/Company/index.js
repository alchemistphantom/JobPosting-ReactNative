import {createStackNavigator} from 'react-navigation-stack';
import Companies from './Companies';

export default createStackNavigator(
  {
    Companies,
  },
  {
    headerMode: 'none',
  },
);
