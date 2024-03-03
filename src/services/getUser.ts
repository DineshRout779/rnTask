import {gql} from '@apollo/client';

export const GET_USER = gql`
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
          login
        }
      }
      following(first: 10) {
        nodes {
          avatarUrl
          email
          name
          twitterUsername
          bio
          login
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
