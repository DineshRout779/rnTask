/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from './Overview';
import Repositories from './Repositories';
import Stars from './Stars';
import Following from './Following';
import Followers from './Followers';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#5753d4',
        },
      }}
      style={{marginVertical: 0}}>
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Repositories" component={Repositories} />
      <Tab.Screen name="Stars" component={Stars} />
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Followers" component={Followers} />
    </Tab.Navigator>
  );
}
