/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useApp} from '../hooks/useApp';

const Overview = () => {
  const {
    state: {userData},
  } = useApp();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
      }}>
      <View
        style={{flex: 1, flexDirection: 'row', gap: 8, paddingVertical: 20}}>
        <Image
          source={{
            uri: userData?.avatarUrl,
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={{fontSize: 24, color: '#333'}}>{userData?.name}</Text>
          <Text style={{fontSize: 16, color: '#777'}}>({userData?.login})</Text>
          <Text style={{fontSize: 16, color: '#999'}}>{userData?.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 4,
    marginVertical: 8,
  },
});
