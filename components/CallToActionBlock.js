import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/CTA.module.css";
import ImageBox from "../components/Image";

const CallToActionBlock = () => {
  return (
    <Box className={styles["cta-wrapper"]}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box className={styles["cta-img"]}>
              <ImageBox width="100%" height="700px" bg="#c4c4c4" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles["cta-content"]}>
              <Typography variant="h2" component="h2" mb={2}>
                Lorem ipsum dolor sit consectetur
              </Typography>
              <Typography
                variant="body2"
                component="p"
                color="secondary"
                mb={8}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                voluptas nam, minima explicabo reprehenderit nesciunt, ipsa
                accusamus odit soluta error debitis quo temporibus itaque
                quisquam dolor officiis doloribus accusantium quaerat.
              </Typography>
              <Button variant="contained">Call to Action</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallToActionBlock;
