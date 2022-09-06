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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
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

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";

function Product() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
  };
  return (
    <MDBox>
      <div>
        <div className="product_card">
          <div className="slider">
            <Button className="btn">
              <ArrowBackIosNewIcon />
            </Button>
            <img
              src=""
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
          </div>
        </div>

        <div className="desc">
          <h1 style={{ fontWeight: "1000", fontSize: 50 }}>Shoe 01</h1>
          <p>Brand: nike</p>
          <p>Available Quantity: 450</p>
          <p>Category: sneaker</p>
          <p>For: male</p>
          <h4 style={{ fontWeight: "600" }}>Price: 400</h4>
          <Rating name="half-rating" defaultValue={4} size="large" />
          <p>1.5k</p>

          <div
            style={{
              height: "2px",
              backgroundColor: "black ",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <MDButton
            variant="gradient"
            color="info"
            onClick={() => handleOpen()}
            startIcon={<DeleteIcon />}
          >
            Delete
          </MDButton>
          <MDButton variant="gradient" color="info" startIcon={<UpgradeIcon />}>
            Update
          </MDButton>
          <MDButton variant="gradient" color="info" startIcon={<ReviewsIcon />}>
            View Reviews
          </MDButton>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this item?
          </Typography>
          <div style={{ flexDirection: "row" }}>
            <Button>Yes</Button>
            <Button>No</Button>
          </div>
        </Box>
      </Modal>
    </MDBox>
  );
}

export default Product;
