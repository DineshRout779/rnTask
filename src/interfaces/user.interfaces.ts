/* eslint-disable prettier/prettier */

export interface User {
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
