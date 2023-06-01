import React from "react";
import { Box, Typography } from "@mui/material";

const Box_comp = () => {
  return (
    <>
      <Box
        width={500}
        boxShadow={1}
        p={5}
        component="section"
        backgroundColor="red"
      >
        {/* <h1>Hello react</h1> */}
        <Typography variant="h1">Hello Box</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          assumenda rem mollitia asperiores ut tenetur nulla iusto natus
          repellat? Itaque?
        </Typography>
      </Box>
    </>
  );
};

export default Box_comp;
