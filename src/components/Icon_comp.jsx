import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";

const Icon_comp = () => {
  return (
    <>
      <Box p="40px">
        <Paper square elevation={5}>
          <Typography variant="h2">Hello Icons</Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
            pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum? Non
            voluptates modi optio magnam quibusdam placeat, tenetur ullam
            deleniti neque!
          </Typography>
          <AdjustSharpIcon
            style={{ fontSize: 100, color: "secondary" }}
          ></AdjustSharpIcon>
        </Paper>
      </Box>
    </>
  );
};

export default Icon_comp;
