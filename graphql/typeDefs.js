const gql = require("graphql-tag");
const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postid: ID!): Post
  }

  type Mutation {
    register(registerInput: RegisterUserInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }

  input RegisterUserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;

module.exports = typeDefs;
