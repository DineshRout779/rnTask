/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {useApp} from '../hooks/useApp';

const Following = () => {
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
        data={userData.following.nodes}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item?.avatarUrl,
              }}
              style={styles.avatar}
            />
            <Text style={{color: '#333', fontSize: 16}}>
              {item.name ? item.name : item.login}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default Following;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginVertical: 4,
    color: '#333',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
