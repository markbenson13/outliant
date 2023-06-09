import { Container, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const Services = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" pt={16}>
          Services
        </Typography>
      </Container>
    </>
  );
};

export default Services;
