import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(5),
  },
}));
const UtilityClasses_comp = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box>
        <Paper
          width="30%"
          component={Box}
          p={3}
          borderLeft={5}
          color={red[500]}
          borderColor={red[500]}
          boxShadow={6}
        >
          <Typography variant="h2">Hello Utility Functions</Typography>
          <Typography color="secondary" gutterBottom>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
            pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum? Non
            voluptates modi optio magnam quibusdam placeat, tenetur ullam
            deleniti neque!
          </Typography>
          <Button variant="contained" color="secondary">
            Read More
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default UtilityClasses_comp;
