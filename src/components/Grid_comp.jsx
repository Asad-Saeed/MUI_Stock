import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";

const Grid_comp = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={4}
          //   justifyContent="center"
          //   justifyContent="space-around"
          justifyContent="space-evenly"
          //   flexDirection="column"
        >
          <Grid item lg={3} md={6} sm={6}>
            <Paper component={Box} p={3}>
              <Typography variant="h2">Hello Grid</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                inventore velit, excepturi maiores doloribus quam reprehenderit.
                Perferendis inventore recusandae nulla nostrum neque eius,
                voluptatem vitae suscipit odit eos ad assumenda?
              </Typography>
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} sm={6}>
            <Paper component={Box} p={3}>
              <Typography variant="h2">Hello Grid</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                inventore velit, excepturi maiores doloribus quam reprehenderit.
                Perferendis inventore recusandae nulla nostrum neque eius,
                voluptatem vitae suscipit odit eos ad assumenda?
              </Typography>
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} sm={6}>
            <Paper component={Box} p={3}>
              <Typography variant="h2">Hello Grid</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                inventore velit, excepturi maiores doloribus quam reprehenderit.
                Perferendis inventore recusandae nulla nostrum neque eius,
                voluptatem vitae suscipit odit eos ad assumenda?
              </Typography>
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={3} md={6} sm={6}>
            <Paper component={Box} p={3}>
              <Typography variant="h2">Hello Grid</Typography>
              <Typography variant="subtitle2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                inventore velit, excepturi maiores doloribus quam reprehenderit.
                Perferendis inventore recusandae nulla nostrum neque eius,
                voluptatem vitae suscipit odit eos ad assumenda?
              </Typography>
              <Button variant="contained" color="secondary">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Grid_comp;
