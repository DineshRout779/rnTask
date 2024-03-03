/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useApp} from '../hooks/useApp';

const Repositories = () => {
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
        paddingVertical: 16,
      }}>
      <FlatList
        data={userData.repositories.nodes}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Repositories;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginVertical: 4,
    color: '#333',
    fontSize: 16,
    flex: 1,
  },
});
