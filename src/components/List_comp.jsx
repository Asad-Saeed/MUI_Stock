import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
    height: "100vh",
    width: "100vw",
  },

  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "20%",
    height: "100%",
    // margin: theme.spacing(4),
    // padding: theme.spacing(4),
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));
const List_comp = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Typography variant="h2">Hello Lists</Typography>
            <Paper component={Box} className={classes.sidebar}>
              <Typography variant="h2">Asad</Typography>

              <Box component="form" mt={2}>
                <List disablePadding>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Getting Started"
                      secondary="do you best"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1">Hello Asad</Typography>
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="asad 123" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="asad 123" />
                  </ListItem>
                  <Collapse in={open}>
                    <List disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Hello Aj</Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Hello Aj</Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Hello Aj</Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Hello Aj</Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Divider />
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default List_comp;
