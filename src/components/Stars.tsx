/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useApp} from '../hooks/useApp';

const Stars = () => {
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
        padding: 16,
      }}>
      <FlatList
        data={userData.starredRepositories.nodes}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.textBg}>{item.name}</Text>
            <Text style={styles.textSm}>{item.nameWithOwner}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Stars;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginVertical: 4,
  },
  textBg: {
    color: '#333',
  },
  textSm: {
    color: '#444',
    fontSize: 12,
  },
});
