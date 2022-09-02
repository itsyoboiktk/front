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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
// import Tooltip from "@mui/material/Tooltip";
import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";
import { InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";

function NewProductCard() {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  // setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="title"
              required
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
                <Select labelId="cat" id="cat" label="Category" name="Category">
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
              id="quantity"
              label="Quantity"
              autoFocus
            />
          </Grid>
          <Grid item xs={20} sm={6}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">For</InputLabel>
                <Select labelId="for" id="for" label="For" name="Gender">
                  <MenuItem value="Men">Men</MenuItem>
                  <MenuItem value="Women">Women</MenuItem>
                  <MenuItem value="Unisex">Unisex</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="brand" required fullWidth id="brand" label="Brand" autoFocus />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="price" required fullWidth id="price" label="Price" autoFocus />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDButton variant="contained" component="label" color="info">
              Upload file
              <Input type="file" name="image" hidden multiple accept="image/png , image/jpeg" />
            </MDButton>
          </Grid>
        </Grid>
        <MDButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          Add New Product
        </MDButton>
      </MDBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBox>
          <MDTypography> Product Added. </MDTypography>
        </MDBox>
      </Modal>
    </Card>
  );
}

export default NewProductCard;
