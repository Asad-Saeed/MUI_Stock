import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  myStyle: {
    color: "green",
    fontSize: "200px",
  },
});
const Typography_comp = () => {
  const classes = useStyle();
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        color="secondary"
        className={classes.myStyle}
      >
        Hello Typography
      </Typography>
      <Typography variant="h2"> Hello Typography</Typography>
      <Typography variant="h3"> Hello Typography</Typography>
      <Typography variant="h4"> Hello Typography</Typography>
      <Typography variant="h5"> Hello Typography</Typography>
      <Typography variant="h6"> Hello Typography</Typography>
      <Typography variant="subtitle1" mt={2}>
        Hello subtitle1
      </Typography>
      <Typography variant="subtitle2"> Hello subtitle2</Typography>
      <Typography variant="body1" mt={2} align="justify" gutterBottom={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro
        doloribus mollitia repellendus. Vero cum sit qui a recusandae,
        aspernatur enim quisquam omnis, mollitia voluptates voluptatum est
        sapiente ex dolor.
      </Typography>
      <Typography variant="body2" nowrap={true} paragraph={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro
        doloribus mollitia repellendus. Vero cum sit qui a recusandae,
        aspernatur enim quisquam omnis, mollitia voluptates voluptatum est
        sapiente ex dolor.
      </Typography>
      <Typography variant="overline">
        Hello Typography by default display:inline property
      </Typography>
      <Typography variant="overline"> Hello Typography</Typography>
      <Typography variant="inherit"> Hello Typography</Typography>
    </>
  );
};

export default Typography_comp;
