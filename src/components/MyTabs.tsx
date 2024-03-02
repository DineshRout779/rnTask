import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Overview from './Overview';
import Repositories from './Repositories';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator style={{marginVertical: 0}}>
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Repositories" component={Repositories} />
    </Tab.Navigator>
  );
}
