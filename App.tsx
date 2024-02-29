import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatCards from './src/components/FlatCards';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
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
