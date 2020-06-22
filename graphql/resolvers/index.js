const postsResolvers = require("./posts");
const userResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
