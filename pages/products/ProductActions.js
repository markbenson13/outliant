import { Button } from "@mui/material";
import React from "react";

const ProductActions = ({ item, setProduct, setTempProduct, setEdit }) => {
  // Edit item in the state array
  const handleEditProduct = (e) => {
    e.preventDefault();
    setTempProduct(item);
    setEdit(true);
  };

  // Delete an item in the state array
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    setProduct((current) =>
      current.filter((product) => product.id !== item.id)
    );
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
