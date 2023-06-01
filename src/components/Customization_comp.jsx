import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Theme from "../Theme";

const Customization_comp = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Box>
          <Paper
            width="50%"
            component={Box}
            p={3}
            borderLeft={5}
            color={red[500]}
            borderColor={red[500]}
            boxShadow={6}
          >
            <Typography variant="h2">Hello MUI Customization</Typography>
            <Typography color="secondary" gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ex
              pariatur, sunt ullam a fugiat deserunt tempore nulla voluptatum?
              Non voluptates modi optio magnam quibusdam placeat, tenetur ullam
              deleniti neque!
            </Typography>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Customization_comp;
