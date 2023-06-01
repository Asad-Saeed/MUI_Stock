import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  CardActionArea,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  img: {
    height: 200,
    width: 300,
  },
}));

const Card_comp = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item sm={3}>
            <Card variant="outlined">
              <CardHeader
                title="Asad Here!"
                subheader="Posted on 28 May"
                avatar={<Avatar>AS</Avatar>}
                action={
                  <IconButton>
                    <ShoppingBasketSharpIcon />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://picsum.photos/1020/1080"
                />
                <CardContent>
                  <Typography variant="h2">Hello Cards</Typography>
                  <Typography>
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii
                    mloresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card variant="outlined">
              <CardHeader
                title="Asad Here!"
                subheader="Posted on 28 May"
                avatar={<Avatar>AS</Avatar>}
                action={
                  <IconButton>
                    <ShoppingBasketSharpIcon />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://picsum.photos/1020/1080"
                />
                <CardContent>
                  <Typography variant="h2">Hello Cards</Typography>
                  <Typography>
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii
                    mloresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card variant="outlined">
              <CardHeader
                title="Asad Here!"
                subheader="Posted on 28 May"
                avatar={<Avatar>AS</Avatar>}
                action={
                  <IconButton>
                    <ShoppingBasketSharpIcon />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://picsum.photos/1020/1080"
                />
                <CardContent>
                  <Typography variant="h2">Hello Cards</Typography>
                  <Typography>
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii
                    mloresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card variant="outlined">
              <CardHeader
                title="Asad Here!"
                subheader="Posted on 28 May"
                avatar={<Avatar>AS</Avatar>}
                action={
                  <IconButton>
                    <ShoppingBasketSharpIcon />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://picsum.photos/1020/1080"
                />
                <CardContent>
                  <Typography variant="h2">Hello Cards</Typography>
                  <Typography>
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                    loresffenciw dconcw cwaijnhkn cijdkh dodkcn dii
                    mloresffenciw dconcw cwaijnhkn cijdkh dodkcn dii m
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Card_comp;
