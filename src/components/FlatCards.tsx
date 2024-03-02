/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {gql} from '@apollo/client';
import {client} from '../..';

interface User {
  name: string; // ✅
  avatarUrl: string;
  bio: string;
  login: string;
  location: string;
  status: {
    emoji: string;
    message: string;
  };
  starredRepositories: {
    totalCount: number;
    nodes: {
      name: string;
      url: string;
      nameWithOwner: string;
    };
  };
  followers: {
    totalCount: number;
    nodes: {
      avatarUrl: string;
      email: string;
      name: string;
      twitterUsername: string;
      bio: string;
    };
  };
  repositories: {
    totalCount: number;
    nodes: {
      name: string;
      updatedAt: string;
    };
  };
  following: {
    totalCount: number;
    nodes: {
      avatarUrl: string;
      email: string;
      name: string;
      twitterUsername: string;
      bio: string;
    };
  };
  pinnedItems: {
    nodes: {
      name: string;
      description: string;
      forks: {
        totalCount: number;
      };
      languages: {
        nodes: {
          name: string;
        };
      };
    };
  };
}

/**
 *
 */
const GET_USER = gql`
  query User($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      login
      location
      status {
        emoji
        message
      }
      starredRepositories {
        totalCount
        nodes {
          name
          url
          nameWithOwner
        }
      }
      repositories(first: 10) {
        nodes {
          name
          updatedAt
        }
      }
      followers(first: 10) {
        nodes {
          avatarUrl
          email
          name
          twitterUsername
          bio
        }
      }
      following(first: 10) {
        nodes {
          avatarUrl
          email
          name
          twitterUsername
          bio
        }
      }
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            name
            description
            forks {
              totalCount
            }
            languages(first: 4) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const FlatCards = () => {
  const [query, setquery] = useState('Dineshrout779');
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async (username: string) => {
    console.log('called API');
    try {
      const {data} = await client.query({
        query: GET_USER,
        variables: {
          login: username,
        },
      });
      setUser(data.user);

      console.log('User:', data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <Text style={styles.headingText}>Github Users</Text>

      <View style={styles.form}>
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
          <Text style={{fontWeight: 'bold', color: '#fcfcfc'}}>Search</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          {user === null ? (
            <View>
              <Text>Search for a user</Text>
            </View>
          ) : (
            <View style={{marginVertical: 10}}>
              <View style={{flex: 1, flexDirection: 'row', gap: 8}}>
                <Image
                  source={{
                    uri: user.avatarUrl,
                  }}
                  style={styles.avatar}
                />

                <View>
                  <Text style={{fontSize: 24, color: '#fcfcfc'}}>
                    {user.name}
                  </Text>
                  <Text style={{fontSize: 16, color: '#777'}}>
                    ({user.login})
                  </Text>
                  <Text style={{fontSize: 16, color: '#999'}}>{user.bio}</Text>
                </View>
              </View>

              <ScrollView style={{marginVertical: 16}} horizontal={true}>
                <TouchableOpacity style={styles.buttonTab}>
                  <Text>Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTab}>
                  <Text>Repositories ({user.repositories.totalCount})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTab}>
                  <Text>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTab}>
                  <Text>Following </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTab}>
                  <Text>Stars ({user.starredRepositories.totalCount}) </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
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
