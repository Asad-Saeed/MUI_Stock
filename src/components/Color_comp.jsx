import { Box, Container, Typography, colors } from "@mui/material";
import React from "react";
import { purple, orange, green, pink, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const myStyle = makeStyles({
  boxStyle: {
    color: pink[500],
    backgroundColor: red[200],
  },
  typoStyle: {
    color: green[700],
  },
});
const Color_comp = () => {
  const classes = myStyle();
  return (
    <>
      <Box component={Container} className={classes.boxStyle}>
        <Typography variant="h2" style={{ color: purple[500] }}>
          Hello Colors
        </Typography>
        <Typography
          style={{ backgroundColor: orange[900] }}
          className={classes.typoStyle}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
          pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum? Non
          voluptates modi optio magnam quibusdam placeat, tenetur ullam deleniti
          neque!
        </Typography>
      </Box>
    </>
  );
};

export default Color_comp;
