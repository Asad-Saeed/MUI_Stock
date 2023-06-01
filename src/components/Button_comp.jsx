import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import WorkspacesSharpIcon from "@mui/icons-material/WorkspacesSharp";

const Button_comp = () => {
  return (
    <>
      <Box p="40px">
        <Box p={5} component={Paper}>
          <Typography variant="h2">Hello Buttons</Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
            pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum? Non
            voluptates modi optio magnam quibusdam placeat, tenetur ullam
            deleniti neque!
          </Typography>
          <Box mt={3}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              size="large"
              startIcon={<WorkspacesSharpIcon />}
            >
              Read More
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Read More
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<WorkspacesSharpIcon />}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Button_comp;
