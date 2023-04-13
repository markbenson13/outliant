import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import BoxImage from "../components/Image";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <Container className={styles["banner-wrapper"]} maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={6} className={styles["banner-content"]}>
          <Typography variant="h1" component="h1">
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography variant="body" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </Typography>
          <Box className={styles["banner-btns"]}>
            <Button variant="contained" color="primary" sx={{ mr: 3 }}>
              Call to Action
            </Button>
            <Button variant="outlined" color="primary">
              See Workspace
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles["image-container"]}>
            <BoxImage
              width="500px"
              height="500px"
              bg="#c4c4c4"
              className={styles["big-image"]}
            />
            <BoxImage
              width="250px"
              height="250px"
              bg="#9d9d9d"
              className={styles["small-image"]}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
