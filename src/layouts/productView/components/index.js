/* eslint-disable no-undef */
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
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import team2 from "assets/images/team-2.jpg";
// import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Button, Divider, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
// import Cdata from "layouts/inventory/components/data";
// import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
// import Cdata from "./data";
// import MDTypography from "components/MDTypography";
// import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import homeDecor2 from "assets/images/home-decor-1.jpg";
import MDTypography from "components/MDTypography";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import FormHelperText from "@mui/joy/FormHelperText";
import axios from "axios";
// eslint-disable-next-line import/no-absolute-path
import "./productView.css";
import boxShadow from "assets/theme/functions/boxShadow";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";pr

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";

function Product() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const navigate = useNavigate();
  const [reviews, setReviews] = React.useState([]);
  const { state } = useLocation();
  // eslint-disable-next-line prefer-destructuring
  const products = state.products;
  // console.log(products._id);
  const id = products._id;
  // const pid = "632e9b968b8d37c8966a8ade";
  console.log(id);

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:4000/product/delete/${id}`)
      .then((res) => {
        if (res.data.message === "Product deleted") {
          navigate("/inventory");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reviewClicked = () => {
    axios
      .get(`http://localhost:4000/review/display/${id}`)
      .then((res) => {
        setReviews(res.data);
        handleOpen2();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styleButton = {
    marginBottom: "10px",
    padding: "10px",
    marginRight: "10px",
  };
  return (
    <Grid sx={{ marginLeft: "10" }}>
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
        <Box display="flex" style={{ alignItems: "center" }}>
          <Button>
            <ArrowBackIosNewIcon />
          </Button>
          <image
            src={products.path[0]}
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
        <div className="textD">
          <Typography fontSize={50} fontWeight="bold" textTransform="capitalize">
            {products.title}
          </Typography>
          <MDTypography textTransform="capitalize">Brand: {products.brand}</MDTypography>
          <MDTypography textTransform="capitalize">
            Available Quantity: {products.quantity}{" "}
          </MDTypography>
          <MDTypography textTransform="capitalize">Category: {products.category} </MDTypography>
          <MDTypography textTransform="capitalize">For: {products.gender} </MDTypography>
          <Typography fontSize={20} fontWeight="bold" textTransform="capitalize">
            Price: {products.price}/- PKR
          </Typography>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Product Info: </h4>
              <p style={{ textAlign: "left" }}>{products.description}</p>
            </Grid>
          </Grid>
          <Rating name="half-rating" defaultValue={4} size="large" />
          <p>1.5k</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
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
          <MDButton
            sx={styleButton}
            onClick={() =>
              navigate("/updatePage", {
                state: { product: products },
              })
            }
            variant="gradient"
            color="info"
            startIcon={<UpgradeIcon />}
          >
            Update
          </MDButton>
          <MDButton
            sx={styleButton}
            onClick={() => reviewClicked()}
            variant="gradient"
            color="info"
            startIcon={<ReviewsIcon />}
          >
            View Reviews
          </MDButton>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <div className="Modal_Rev">
            <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
              <Typography
                id="alert-dialog-modal-title"
                component="h2"
                level="inherit"
                fontSize="1.25em"
                mb="0.25em"
                startDecorator={<WarningRoundedIcon />}
              >
                Confirmation
              </Typography>
              <Typography id="alert-dialog-modal-description" textColor="text.tertiary" mb={3}>
                Are you sure you want to delete this?
              </Typography>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
                <Button variant="plain" color="neutral" onClick={() => handleClose()}>
                  Cancel
                </Button>
                <Button variant="solid" color="danger" onClick={() => deleteProduct()}>
                  Delete
                </Button>
              </Box>
            </Paper>
          </div>
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="Modal_Rev">
            {reviews.map((ele) => (
              <Paper style={{ padding: "40px 20px", maxHeight: 400, overflow: "auto" }}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <MDAvatar alt="img" src={team2} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                    <p style={{ textAlign: "left" }}>{ele.comment}</p>
                  </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              </Paper>
            ))}
          </div>
        </Modal>
      </div>
    </Grid>
  );
}

export default Product;
