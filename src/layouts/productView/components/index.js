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
import { useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Button } from "@mui/material";
// import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import Cdata from "./data";
// import MDTypography from "components/MDTypography";
// import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import homeDecor1 from "assets/images/home-decor-1.jpg";
import MDTypography from "components/MDTypography";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";

function Product() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { state } = useLocation();
  // eslint-disable-next-line prefer-destructuring
  const products = state.products;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
    bgColor: "white",
  };
  const styleButton = {
    marginBottom: "10px",
    padding: "10px",
    marginRight: "10px",
  };
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
          <Typography fontSize={50} fontWeight="bold" textTransform="capitalize">
            {products.name}
          </Typography>
          <MDTypography textTransform="capitalize">Brand: {products.brand}</MDTypography>
          <MDTypography textTransform="capitalize">Available Quantity:450 </MDTypography>
          <MDTypography textTransform="capitalize">Category: Sneakers </MDTypography>
          <MDTypography textTransform="capitalize">For: Male </MDTypography>
          <Typography fontSize={20} fontWeight="bold" textTransform="capitalize">
            Price: {products.price}/- PKR
          </Typography>
          <Rating name="half-rating" defaultValue={4} size="large" />
          <p>1.5k</p>
        </MDBox>
        <MDBox
          bgColor="error"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <MDButton
            sx={styleButton}
            variant="gradient"
            color="info"
            onClick={() => handleOpen()}
            startIcon={<DeleteIcon />}
          >
            Delete
          </MDButton>
          <MDButton sx={styleButton} variant="gradient" color="info" startIcon={<UpgradeIcon />}>
            Update
          </MDButton>
          <MDButton sx={styleButton} variant="gradient" color="info" startIcon={<ReviewsIcon />}>
            View Reviews
          </MDButton>
        </MDBox>
      </MDBox>
      <Modal
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
      </Modal>
    </MDBox>
  );
}

export default Product;
