import { Container, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" pt={16}>
          About
        </Typography>
      </Container>
    </>
  );
};

export default About;
