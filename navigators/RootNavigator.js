import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ListJob from '../screens/tab/job/ListJob';
import SplashScreen from '../screens/SplashScreen';

const AppNavigator = createAppContainer(
  {
    List: ListJob,
  },
  {
    defaultNavigationOptions: {
      title: 'Daftar Lowongan',
    },
  },
);

export default createAppContainer(AppNavigator);
