import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import CallToActionBlock from "../../components/CallToActionBlock";
import Header from "../../components/Header";
import styles from "../../styles/Products.module.css";
import ProductActions from "./ProductActions";

const Products = () => {
  const products = [
    {
      id: 1,
      product: "Samsung",
      price: 25,
    },
    {
      id: 2,
      product: "Iphone",
      price: 100,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <ProductActions
            item={params.row}
            setProduct={setProduct}
            setTempProduct={setTempProduct}
            setEdit={setEdit}
            products={products}
          />
        );
      },
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];

  const unique_id = uuid();
  const [product, setProduct] = useState(products);
  const [tempProduct, setTempProduct] = useState(null);
  const [edit, setEdit] = useState(false);

  // Create a product
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const data = {
      id: unique_id,
      product: e.target.product.value,
      price: e.target.price.value,
    };

    // Add a new product in the state array
    setProduct((prevState) => [...prevState, data]);
    e.target.reset();
  };

  // Update a product
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const data = {
      product: e.target.product.value,
      price: e.target.price.value,
    };

    // Update selected objects in a state array
    setProduct((prevState) =>
      prevState.map((obj) => {
        if (obj.id === tempProduct.id) {
          return { ...obj, ...data };
        }
        return obj;
      })
    );
    e.target.reset();
    setEdit(false);
  };

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ paddingTop: "6rem", paddingBottom: "15rem" }}
      >
        <Grid container direction="row" spacing={6}>
          <Grid container item xs={6} mb={5}>
            <Box className={styles["search-header"]}>
              <Typography variant="h3" component="h1" mr={3}>
                Products
              </Typography>
              <TextField
                id="search"
                label="Search for keywords..."
                variant="outlined"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid container item spacing={6}>
            <Grid item xs={6}>
              <Box className={styles["product-listings"]}>
                <DataGrid
                  className={styles["product-table"]}
                  rows={product}
                  columns={columns}
                  autoHeight={true}
                  rowHeight={100}
                  sx={{
                    "& .MuiDataGrid-columnHeaders ": {
                      backgroundColor: "primary.dark",
                    },
                    "& .MuiDataGrid-cell ": {
                      height: "100px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles["search-form"]}>
                <Typography variant="h3" component="h3" mb={3}>
                  {edit ? "Update" : "Add"} product
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  mb={4}
                  color="secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit ut
                </Typography>
                {!edit ? (
                  <form onSubmit={handleCreateProduct}>
                    <FormControl fullWidth>
                      <TextField
                        id="product-name"
                        name="product"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        id="product-price"
                        name="price"
                        label="Price"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                      <Button variant="contained" type="submit">
                        Create
                      </Button>
                    </FormControl>
                  </form>
                ) : (
                  <form onSubmit={handleUpdateProduct}>
                    <FormControl fullWidth>
                      <TextField
                        id="product-name"
                        name="product"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={tempProduct?.product}
                        onChange={(e) => {
                          setEdit(true);
                          setTempProduct({
                            ...tempProduct,
                            product: e.target.value,
                          });
                        }}
                        sx={{ mb: 2 }}
                      />
                      <TextField
                        id="product-price"
                        name="price"
                        label="Price"
                        variant="outlined"
                        value={tempProduct?.price}
                        onChange={(e) => {
                          setEdit(true);
                          setTempProduct({
                            ...tempProduct,
                            price: e.target.value,
                          });
                        }}
                        sx={{ mb: 2 }}
                      />
                      <Button variant="contained" type="submit">
                        Save
                      </Button>
                    </FormControl>
                  </form>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <CallToActionBlock />
    </>
  );
};

export default Products;
