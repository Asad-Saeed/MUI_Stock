import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Paper_comp = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper square elevation={10}>
          <Box p={2}>
            <Typography variant="h2">Hello Paper</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              maiores autem numquam ratione incidunt reprehenderit recusandae
              labore nobis nisi. Hic.
            </Typography>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Paper_comp;
