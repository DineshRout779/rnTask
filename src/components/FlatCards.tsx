/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
      </View>

      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#fe5354',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
