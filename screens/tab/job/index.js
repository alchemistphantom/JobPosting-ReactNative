import {createStackNavigator} from 'react-navigation-stack';
import Listjob from './ListJob';
import DetailJob from './DetailJob';
import AddUpdateJob from './AddUpdateJob';

export default createStackNavigator(
  {
    Listjob,
    DetailJob,
    AddUpdateJob,
  },
  {
    headerMode: 'none',
  },
);
