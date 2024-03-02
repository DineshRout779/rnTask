import React from 'react';

import {View, Text} from 'react-native';
const Repositories = () => {
  console.log('inside repos...');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
      }}>
      <Text style={{color: '#333'}}>Repositories</Text>
    </View>
  );
};
export default Repositories;
