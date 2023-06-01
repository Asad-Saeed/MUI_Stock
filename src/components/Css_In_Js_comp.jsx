import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  myContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey[400],
  },
  mybox: {
    width: 900,
    backgroundColor: theme.palette.primary.light,
    // 1=8px
    padding: theme.spacing(4),
    border: "20px solid green",
    borderRadius: 50,
    boxShadow: theme.shadows[24],
  },
}));
const Css_In_Js_comp = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.myContainer}>
        <Box className={classes.mybox}>
          <Typography variant="h1">Css in JS Customization</Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h1">Css in JS Customization</Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h1">Css in JS Customization</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Css_In_Js_comp;
