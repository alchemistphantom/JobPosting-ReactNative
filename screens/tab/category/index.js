import {createStackNavigator} from 'react-navigation-stack';
import Category from './Category';

export default createStackNavigator(
  {
    Category,
  },
  {
    headerMode: 'none',
  },
);
