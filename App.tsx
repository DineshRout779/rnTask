/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FlatCards from './src/components/FlatCards';
import MyTabs from './src/components/MyTabs';

function App(): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <FlatCards />
        </ScrollView>
      </View>
      <MyTabs />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 18,
  },
});

export default App;
