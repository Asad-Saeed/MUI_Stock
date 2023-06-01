import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  CssBaseline,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TranslateIcon from "@mui/icons-material/Translate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const languages = ["English", "Urdu", "Bangla", "Punjabi", "Chinese"];

export default function Menu_comp() {
  const classes = useStyles();
  const [languageAnchorEL, setLanguageAnchorEL] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleOpen = (e) => setLanguageAnchorEL(e.currentTarget);
  const handleClose = () => setLanguageAnchorEL(null);
  const handleSelect = (index) => {
    setSelectedIndex(index);
    handleClose();
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Asad Saeed
          </Typography>
          <Button
            onClick={handleOpen}
            color="inherit"
            startIcon={<TranslateIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {languages[selectedIndex] || "Select Language"}
          </Button>
          <Menu
            open={languageAnchorEL}
            anchorEl={languageAnchorEL}
            onClose={handleClose}
          >
            {languages.map((item, index) => (
              <MenuItem
                selected={selectedIndex === index}
                onClick={() => handleSelect(index)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
