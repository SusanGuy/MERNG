const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello World",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(
  MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB server connected");
  }
);

server.listen({ port: 5000 }).then(({ url }) => {
  console.log("Server running at " + url);
});
