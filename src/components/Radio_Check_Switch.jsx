import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Radio,
  FormControl,
  Checkbox,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
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

const Radio_Check_Switch = () => {
  const classes = useStyles();
  const [gender, SetGender] = useState("Male");
  const [remember, setRemember] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const handelChange1 = (e) => {
    SetGender(e.target.value);
  };
  const handelChange2 = (e) => {
    setRemember(e.target.checked);
  };
  const handelChange3 = (e) => {
    setAutoPlay(e.target.checked);
  };
  useEffect(() => {
    console.log("gender", gender);
  }, [gender]);

  useEffect(() => {
    console.log("remember", remember);
  }, [remember]);
  useEffect(() => {
    console.log("autoPlay", autoPlay);
  }, [autoPlay]);

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Typography variant="h2">Radio_Check_Switch</Typography>
            <Paper className={classes.paperpadd}>
              <Typography variant="h2">Asad</Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                molestiae ullam eius veritatis architecto dolore illo velit sed
                ipsam voluptatum consectetur, dolor fugit voluptatem repellat.
                Pariatur voluptate beatae nemo quasi?
              </Typography>
              <Box component="form" mt={2}>
                <FormControl>
                  <FormLabel>Choose Your Gender</FormLabel>
                  <RadioGroup value={gender} onChange={handelChange1} row>
                    <FormControlLabel
                      label="Male"
                      control={<Radio color="secondary" />}
                      value="Male"
                    />
                    <FormControlLabel
                      label="FeMale"
                      control={<Radio color="secondary" />}
                      value="FeMale"
                    />
                    <FormControlLabel
                      label="other"
                      control={<Radio color="secondary" />}
                      value="other"
                    />
                  </RadioGroup>
                </FormControl>
                <Typography>{gender}</Typography>
              </Box>
              <Box component="form" mt={2}>
                <FormControl>
                  <FormControlLabel
                    label="keep me remember"
                    control={
                      <Checkbox
                        onChange={handelChange2}
                        defaultChecked
                        color="secondary"
                        checked={remember}
                        checkedIcon={<FavoriteIcon />}
                        icon={<FavoriteBorderIcon />}
                      />
                    }
                  />
                </FormControl>
                <Typography>{remember ? "true" : "false"}</Typography>
              </Box>
              <Box component="form" mt={2}>
                <FormControl>
                  <FormControlLabel
                    label="Play Video"
                    control={
                      <Switch onChange={handelChange3} color="secondary" />
                    }
                  />
                </FormControl>

                <Typography>{autoPlay ? "play" : "stop"}</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Radio_Check_Switch;
