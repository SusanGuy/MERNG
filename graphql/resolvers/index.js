const postsResolvers = require("./posts");
const userResolvers = require("./users");
const commentResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => {
      return parent.likes.length;
    },
    commentCount: (parent) => {
      return parent.comments.length;
    },
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...userResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
