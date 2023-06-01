import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Container_comp = () => {
  return (
    <>
      <Container disableGutters={true} maxWidth="sm">
        <Box textAlign="center" pt={10}>
          <Typography variant="h1">Hello Container</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            laborum quia aspernatur porro facilis aliquid debitis, excepturi
            illo ipsam ullam repudiandae nemo provident numquam consequatur
            omnis quae esse deserunt laboriosam!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Container_comp;
