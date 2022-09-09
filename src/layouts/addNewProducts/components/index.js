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
// import * as React from "react";
// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
// import Tooltip from "@mui/material/Tooltip";
import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function NewProductCard() {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  const [cat, setCat] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [price, setPrice] = React.useState("");

  // const handleOpen = () => {
  // setOpen(true);
  // };
  // eslint-disable-next-line no-unused-vars
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const Dataarray = [title, cat, quantity, gender, brand, price];
    console.log(Dataarray);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid",
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
  };

  return (
    <Card id="new-product">
      <MDBox
        pt={2}
        px={2}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" fontWeight="medium">
          New Product Card
        </MDTypography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                onChange={(x) => setTitle(x.target.value)}
                value={title}
                fullWidth
                id="productname"
                label="Product Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={20} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="quantity"
                required
                fullWidth
                onChange={(x) => setQuantity(x.target.value)}
                value={quantity}
                id="quantity"
                label="Quantity"
                autoFocus
              />
            </Grid>
            <Grid item xs={20} sm={6}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">For</InputLabel>
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
            <Grid item xs={12} sm={6}>
              <TextField
                name="brand"
                onChange={(x) => setBrand(x.target.value)}
                value={brand}
                required
                fullWidth
                id="brand"
                label="Brand"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                onChange={(x) => setPrice(x.target.value)}
                value={price}
                required
                fullWidth
                id="price"
                label="Price"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDButton variant="contained" component="label" color="info">
                Upload file
                <Input type="file" name="image" hidden multiple accept="image/png , image/jpeg" />
              </MDButton>
            </Grid>
          </Grid>
          <Button
            type="Proceed"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Product
          </Button>
        </Box>
      </MDBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MDTypography id="modal-modal-title" variant="h6" component="h2">
            Product successfully added!
          </MDTypography>
        </Box>
      </Modal>
    </Card>
  );
}

export default NewProductCard;
