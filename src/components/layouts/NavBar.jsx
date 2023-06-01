import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    height: "100vh",
    width: "100vw",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [MobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isMobileMenuOpen = Boolean(MobileMenuAnchor);
  const openMenu = (e) => {
    setMobileMenuAnchor(e.currentTarget);
  };
  const closeMenu = () => {
    setMobileMenuAnchor(null);
  };
  const MobileMenu = (
    <Menu
      anchorEl={MobileMenuAnchor}
      id="mobileMenu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem component={Link} color="inherit" onClick={closeMenu} to="/Home">
        Home
      </MenuItem>
      <MenuItem
        component={Link}
        color="inherit"
        onClick={closeMenu}
        to="/About"
      >
        About
      </MenuItem>
      <MenuItem
        component={Link}
        color="inherit"
        onClick={closeMenu}
        to="/Contact"
      >
        Contact
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Box
            className={classes.sectionDesktop}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button component={Link} color="inherit" to="/Home">
              Home
            </Button>
            <Button component={Link} color="inherit" to="/About">
              About
            </Button>
            <Button component={Link} color="inherit" to="/Contact">
              Contact
            </Button>
          </Box>
          <Box className={classes.sectionMobile}>
            <IconButton color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {MobileMenu}
    </div>
  );
};

export default NavBar;
