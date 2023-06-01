import { Box, Container, Fab, Paper, Typography } from "@mui/material";
import React from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: theme.zIndex.tooltip,
  },
}));

const Fab_comp = () => {
  const classes = useStyle();
  return (
    <>
      <Container className={classes.root}>
        <Fab color="info" className={classes.add} variant="extended">
          <AddSharpIcon />
          Create Account
        </Fab>
        <Box p="40px">
          <Paper square elevation={5}>
            <Typography variant="h2">Hello FAB</Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
              pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum?
              Non voluptates modi optio magnam quibusdam placeat, tenetur ullam
              deleniti neque!
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Fab_comp;
