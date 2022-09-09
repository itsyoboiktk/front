/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React from "react";
import MDBox from "components/MDBox";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import Modal from "@mui/material/Modal";
import homeDecor1 from "assets/images/home-decor-1.jpg";

function UpdateProduct() {
  const { state } = useLocation();
  // eslint-disable-next-line prefer-destructuring
  const products = state.products;
  // console.log(updates);
  const [title, setTitle] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [cat, setCat] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const Dataarray = [title, brand, quantity, cat, gender, price];
    console.log(Dataarray);
  };
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   borderRadius: "10px",
  //   boxShadow: 25,
  //   p: 4,
  //   bgColor: "white",
  // };
  // const styleButton = {
  //   marginBottom: "10px",
  //   padding: "10px",
  //   marginRight: "10px",
  // };

  return (
    <MDBox>
      <MDBox>
        <MDBox display="flex">
          <Button>
            <ArrowBackIosNewIcon />
          </Button>
          <img
            src={homeDecor1}
            alt="product"
            style={{
              objectFit: "contain",
              maxWidth: "400px",
              maxHeight: "400px",
              minHeight: "400px",
              minWidth: "400px",
            }}
          />
          <Button>
            <ArrowForwardIosIcon />
          </Button>
        </MDBox>

        <MDBox>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={24} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  onChange={(x) => setTitle(x.target.value)}
                  value={title}
                  fullWidth
                  placeholder={products.name}
                  id="productname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="brand"
                  onChange={(x) => setBrand(x.target.value)}
                  value={brand}
                  placeholder={products.brand}
                  required
                  fullWidth
                  id="brand"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="quantity"
                  onChange={(x) => setQuantity(x.target.value)}
                  value={quantity}
                  placeholder={products.quantity}
                  required
                  fullWidth
                  id="quantity"
                  autoFocus
                />
              </Grid>
              <Grid item xs={20} sm={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{products.category}</InputLabel>
                    <Select
                      labelId="cat"
                      id="cat"
                      onChange={(x) => setCat(x.target.value)}
                      value={cat}
                      label="Category"
                      name="Category"
                    >
                      <MenuItem value="Sneaker">Sneaker</MenuItem>
                      <MenuItem value="Causal">Causal</MenuItem>
                      <MenuItem value="Formal">Formal</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={20} sm={12}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{products.gender}</InputLabel>
                    <Select
                      labelId="for"
                      id="for"
                      onChange={(x) => setGender(x.target.value)}
                      value={gender}
                      label="For"
                      name="Gender"
                    >
                      <MenuItem value="Men">Men</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Unisex">Unisex</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="price"
                  onChange={(x) => setPrice(x.target.value)}
                  value={price}
                  placeholder={products.price}
                  required
                  fullWidth
                  id="price"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button type="Proceed" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Update
            </Button>
          </Box>
        </MDBox>
      </MDBox>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBox bgColor="light" coloredShadow="dark" sx={style}>
          <Typography variant="h6" component="h2">
            Are you sure you want to delete this item?
          </Typography>
          <MDButton sx={styleButton} color="info">
            Yes
          </MDButton>
          <MDButton sx={styleButton} color="info">
            No
          </MDButton>
        </MDBox>
      </Modal> */}
    </MDBox>
  );
}

export default UpdateProduct;
