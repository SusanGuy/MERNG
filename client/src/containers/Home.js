import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, GridColumn, Transition } from "semantic-ui-react";
import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../utils/graphql";
const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const { user } = useContext(AuthContext);
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
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading Posts....</h1>
        ) : (
          <Transition.Group>
            {posts &&
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
              })}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
