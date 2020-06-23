import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, GridColumn } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import gql from "graphql-tag";
const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  let posts = [];
  if (data) {
    posts = data.getPosts;
  }

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts....</h1>
        ) : (
          posts &&
          posts.map((post) => {
            return (
              <GridColumn
                key={post.id}
                style={{
                  marginBottom: "20px",
                }}
              >
                <PostCard post={post} />
              </GridColumn>
            );
          })
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
