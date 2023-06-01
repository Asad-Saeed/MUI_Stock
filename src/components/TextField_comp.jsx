import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  InputAdornment
} from "@mui/material";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  paperpadd: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
  },
}));

const TextField_comp = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item sm={6}>
            <Paper className={classes.paperpadd}>
              <Typography variant="h2">Hello TextField</Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                molestiae ullam eius veritatis architecto dolore illo velit sed
                ipsam voluptatum consectetur, dolor fugit voluptatem repellat.
                Pariatur voluptate beatae nemo quasi?
              </Typography>
              <Box component="form" mt={2}>
                <TextField
                  fullWidth
                  placeholder="Enter Your Name"
                  label="Enter Your Name"
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ShoppingBasketSharpIcon color="secondary"/>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Enter Your Name"
                  label="Enter Your Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  placeholder="Enter Your Massage"
                  label="Enter Your Massage"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  helperText="maximum 50 character"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TextField_comp;
