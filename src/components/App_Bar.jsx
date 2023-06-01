import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavBar from "./layouts/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/layouts/Home";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[200],
    height: "100vh",
    width: "100vw",
  },
}));

const App_Bar = () => {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Container className={classes.container} disableGutters>
          <NavBar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Typography variant="h2">Hello AppBar</Typography>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App_Bar;
