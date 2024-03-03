/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-catch-shadow */
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {client} from '../..';
import {GET_USER} from '../services/getUser';
import {useApp} from '../hooks/useApp';

const Home = () => {
  const {storeUser, removeUser} = useApp();
  const [query, setquery] = useState('Dineshrout779');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username: string) => {
    removeUser();
    setError('');
    setLoading(true);
    try {
      const {data} = await client.query({
        query: GET_USER,
        variables: {
          login: username,
        },
      });
      storeUser(data.user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      removeUser();
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.headingText}>Github Users</Text>

      <KeyboardAvoidingView style={styles.form}>
        <TextInput
          placeholder="Type here to search.."
          style={styles.textInput}
          defaultValue={query}
          onChangeText={newText => setquery(newText)}
          autoFocus
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchUser(query)}>
          <Text style={{fontWeight: 'bold', color: '#fcfcfc'}}>
            {loading ? 'Searching' : 'Search'}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {loading && (
        <Text style={{marginTop: 48, marginHorizontal: 'auto'}}>
          Loading...
        </Text>
      )}

      {error && (
        <Text style={{marginTop: 48, marginHorizontal: 'auto'}}>{error}</Text>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 16,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  textInput: {
    borderColor: '#888',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    padding: 10,
    flexGrow: 1,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonTab: {
    backgroundColor: '#1c1c1c',
    padding: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 4,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#5f5aea',
    color: '#fff',
    padding: 4,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 40,
  },
});
