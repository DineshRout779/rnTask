/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyTabs from './src/components/MyTabs';
import {useApp} from './src/hooks/useApp';
import Home from './src/components/Home';

function App(): React.JSX.Element {
  const {
    state: {userData},
  } = useApp();

  return (
    <>
      <View style={styles.container}>
        {/* <ScrollView style={styles.scrollViewStyle}> */}
        <Home />
        {/* </ScrollView> */}
      </View>
      {userData && <MyTabs />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    padding: 20,
  },
  scrollViewStyle: {
    height: 'auto',
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
