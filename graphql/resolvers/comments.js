const Post = require("../../models/Post");
const checkAuth = require("../../util/check-auth");
const { UserInputError, AuthenticationError } = require("apollo-server");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, { req }) => {
      const { username } = checkAuth(req);
      if (body.trim === "") {
        throw new UserInputError("Body is required", {
          errors: {
            body: "Body is required",
          },
        });
      }
      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString,
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
    deleteComment: async (_, { postId, commentId }, { req }) => {
      const { username } = checkAuth(req);
      const post = await Post.findById(postId);
      if (post) {
        const commentIndex = post.comments.findIndex(
          (comment) => comment.id !== commentId
        );

        if (commentIndex === -1) {
          throw new Error("Comment not found");
        }

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Posts not found");
      }
    },
  },
};
