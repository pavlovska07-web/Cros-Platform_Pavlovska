export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Goal {
    id: ID!
    title: String!
    description: String
    status: String!
    author: User!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    me: User
    goals: [Goal!]!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createGoal(title: String!, description: String, status: String): Goal!
    deleteGoal(id: ID!): Boolean!
  }
`;