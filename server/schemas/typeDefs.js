// import the graphQL template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`
  type Reaction {
    _id: ID
    reactionBody: String
    username: String
    createdAt: String
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactions: [Reaction]
    reactionCount: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
    friends: [User]
    friendCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;