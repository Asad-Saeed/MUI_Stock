import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

function PaginationComp() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const loadPosts = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <div className="App">
      <CssBaseline />
      <Container component={Box} py={3}>
        <Grid container spacing={5}>
          {posts.map((post) => (
            <Grid item sm={3} key={post.id}>
              <Card style={{ height: 250 }}>
                <CardContent>
                  <Typography variant="h6">
                    {post.id}. {post.title}
                  </Typography>
                  <Typography variant="body1">{post.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            showFirstButton
            showLastButton
            hideNextButton
            hidePrevButton
            defaultPage={1}
            onChange={(event, value) => setPage(value)}
          />
        </Box>
      </Container>
    </div>
  );
}

export default PaginationComp;
