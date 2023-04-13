import { Button } from "@mui/material";
import React from "react";

const ProductActions = ({ item }) => {
  console.log("params", item);
  const handleEditProduct = (e) => {
    e.preventDefault();
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleEditProduct}
        sx={{ marginRight: "20px" }}
      >
        Edit
      </Button>
      <Button variant="outlined" ml={2} onClick={handleDeleteProduct}>
        Delete
      </Button>
    </>
  );
};

export default ProductActions;
