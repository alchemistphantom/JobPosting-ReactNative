/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';

//page import
import JobScreen from './job';
import CompanyScreen from './Company';
import CategoryScreen from './category';

export default createBottomTabNavigator({
  JOB: {
    screen: JobScreen,
    navigationOptions: {
      title: 'JOB',
      tabBarIcon: ({tintColor}) => {
        <Icon name="home" color={tintColor} />;
      },
    },
  },
  COMPANY: {
    screen: CompanyScreen,
    navigationOptions: {
      title: 'COMPANY',
      tabBarIcon: ({tintColor}) => {
        <Icon name="briefcase" color={tintColor} />;
      },
    },
  },
  CATEGORY: {
    screen: CategoryScreen,
    navigationOptions: {
      title: 'CATEGORY',
      tabBarIcon: ({tintColor}) => {
        <Icon name="briefcase" color={tintColor} />;
      },
    },
  },
});
