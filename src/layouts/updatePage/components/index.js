/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
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
import MDButton from "components/MDButton";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useLocation, useNavigate } from "react-router-dom";
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
import axios from "axios";
// import Modal from "@mui/material/Modal";
import homeDecor1 from "assets/images/home-decor-1.jpg";

function UpdateProduct() {
  const { state } = useLocation();
  // eslint-disable-next-line prefer-destructuring
  const products = state.product;
  const id = products._id;
  // console.log(updates);
  const navigate = useNavigate();
  const [title1, setTitle] = React.useState(products.title);
  const [brand1, setBrand] = React.useState(products.brand);
  const [quantity1, setQuantity] = React.useState(products.quantity);
  const [category1, setCategory] = React.useState(products.category);
  const [gender1, setGender] = React.useState(products.gender);
  const [price1, setPrice] = React.useState(products.price);
  const [description1, setDescription] = React.useState(products.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const updated = {
      _id: products._id,
      title: title1,
      category: category1,
      gender: gender1,
      price: price1,
      brand: brand1,
      quantity: quantity1,
      description: description1,
    };
    console.log(updated);
    sendData(updated);
  };
  const sendData = (data) => {
    axios
      .put(`http://localhost:4000/product/update/${id}`, data)
      .then((res) => {
        console.log(res);
        navigate("/inventory");
      })
      .catch((e) => {
        console.log(e);
      });
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
    <div
      style={{
        backgroundColor: "white",
        // border: "1px solid",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // maxHeight: "100vh",
      }}
    >
      <Box display="flex">
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
      </Box>

      <MDBox>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={24} sm={12}>
              <TextField
                autoComplete="given-name"
                label="Product Title"
                name="title"
                required
                value={title1}
                onChange={(x) => setTitle(x.target.value)}
                fullWidth
                id="productname"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="brand"
                label="Brand"
                value={brand1}
                onChange={(x) => setBrand(x.target.value)}
                required
                fullWidth
                id="brand"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="quantity"
                label="Quantity"
                onChange={(x) => setQuantity(x.target.value)}
                value={quantity1}
                required
                fullWidth
                id="quantity"
                autoFocus
              />
            </Grid>
            <Grid item xs={20} sm={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="cat"
                    id="cat"
                    label="Category"
                    onChange={(x) => setCategory(x.target.value)}
                    value={category1}
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
                  <InputLabel id="demo-simple-select-label">for</InputLabel>
                  <Select
                    labelId="for"
                    id="for"
                    onChange={(x) => setGender(x.target.value)}
                    value={gender1}
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
                value={price1}
                required
                fullWidth
                label="Price"
                id="price"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="description"
                multiline
                minRows={3}
                required
                fullWidth
                id="description"
                label="Product Description"
                onChange={(x) => setDescription(x.target.value)}
                value={description1}
                autoFocus
              />
            </Grid>
          </Grid>
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <Button type="Proceed" variant="gradient" color="info" startIcon={<UpgradeIcon />}>
              Update
            </Button>
          </div>
        </Box>
      </MDBox>
    </div>
  );
}

export default UpdateProduct;
