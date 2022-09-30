/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
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
import Grid from "@mui/material/Grid";
import React from "react";
import Modal from "@mui/material/Modal";
import { Divider, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";
import Avatar from "@mui/material/Avatar";
import Footer from "examples/Footer";

// Data
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

function Overview() {
  const [products, setProducts] = React.useState([]);
  const [man, setMan] = React.useState();

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => setOpen3(false);
  const id = "63302400546104db920e882c";
  const navigate = useNavigate();

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 600,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
    bgColor: "white",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
    bgColor: "white",
  };
  // for other data
  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log("here");
    const data = new FormData(event.currentTarget);
    sendData2(data);
  };
  const sendData2 = (data) => {
    console.log(data.get("title"));
    axios.put(`http://localhost:4000/manager/update/${id}`, data).then((res) => {
      console.log(res);
    });
  };
  // For Passwords
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here");
    const data = new FormData(event.currentTarget);
    sendData(data);
  };
  const sendData = (data) => {
    axios.put(`http://localhost:4000/manager/update/password/${id}`, data).then((res) => {
      console.log(res);
    });
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/manager/display/${id}`)
      .then((res) => {
        setMan(res.data[0]);
        console.log("hello", res.data[0]);
        console.log(man);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/product/display/")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data2 = new FormData(event.currentTarget);
  //   console.log(data2);
  //   const updated = {
  //     _id: products._id,
  //     title: title1,
  //     category: category1,
  //     gender: gender1,
  //     price: price1,
  //     brand: brand1,
  //     quantity: quantity1,
  //     description: description1,
  //   };
  //   console.log(updated);
  //   sendData2(updated);
  // };
  // const sendData2 = (data2) => {
  //   axios
  //     .put(`http://localhost:4000/product/update/${id}`, data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar onClick={() => handleOpen3()}>DP</Avatar>
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  {/* {man.company} */}
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  CEO / Co-Founder
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        </Card>
      </MDBox>
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xl={12} sx={{ display: "flex" }}>
            <Card sx={{ margin: "10px", flex: "1 1 20%" }}>
              <CardContent>
                {/* <Paper style={{ padding: "40px 20px", overflow: "auto" }}> */}
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>Store Info: </h4>
                    <p style={{ textAlign: "left" }}>
                      i quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam
                      vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec
                      feugiat quam lectus vitae ex.{" "}
                    </p>
                  </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                <MDTypography gutterBottom variant="h6" component="div">
                  StoreName: "man.company"
                </MDTypography>
                <MDTypography gutterBottom variant="h6" component="div">
                  Email: "man.email"
                </MDTypography>
                <MDTypography gutterBottom variant="h6" component="div">
                  Address: "man.Address"
                </MDTypography>
                <MDTypography gutterBottom variant="h6" component="div">
                  Mobile: "man.Company"
                </MDTypography>
                {/* </Paper> */}
              </CardContent>
              <CardActions>
                <MDButton onClick={() => handleOpen()}>Edit Profile</MDButton>
                <MDButton onClick={() => handleOpen2()}>Change Password</MDButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBox bgColor="light" coloredShadow="dark" sx={style2}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              alignItems="center"
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    placeholder="Shop Name"
                    id="shopName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="email"
                    placeholder="Shop email"
                    required
                    fullWidth
                    id="email"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="address"
                    placeholder="Shop Location"
                    required
                    fullWidth
                    id="address"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="detail"
                    placeholder="Shop Info"
                    required
                    fullWidth
                    id="detail"
                    autoFocus
                    multiline
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <Button type="Proceed" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Update
              </Button>
            </Box>
          </Paper>
        </MDBox>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBox bgColor="light" coloredShadow="dark" sx={style2}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              alignItems="center"
              component="form"
              noValidate
              onSubmit={handleSubmit2}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Cpass"
                    required
                    fullWidth
                    placeholder="Current Password"
                    id="Cpass"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="Npass"
                    placeholder="New Password"
                    required
                    fullWidth
                    id="NPass"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

              <Button type="Proceed" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Change Password
              </Button>
            </Box>
          </Paper>
        </MDBox>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MDBox bgColor="light" coloredShadow="dark" sx={style}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 245, margin: "10px", flex: "1 1 20%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      // image={`http://localhost:4000/${ele.path[1]}`}
                      image="{hel}"
                      alt="Display Picture"
                    />
                  </Card>

                  <MDButton variant="contained" component="label" color="info">
                    Upload file
                    <Input
                      type="file"
                      name="images"
                      hidden
                      multiple
                      accept="image/png , image/jpeg"
                    />
                  </MDButton>
                </Grid>
              </Grid>
              <Button
                type="Proceed"
                onClick={() => handleOpen3()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Change
              </Button>
            </Box>
          </Paper>
        </MDBox>
      </Modal>
      <MDBox pt={2} px={2} lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium">
          Products
        </MDTypography>
        <MDBox mb={1}>
          <MDTypography variant="button" color="text">
            Top Products
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <div className="grid-container">
              {products.map((ele) => (
                <MDBox
                  display="flex"
                  flex-wrap="wrap"
                  borderRadius="lg"
                  shadow="md"
                  width="80%"
                  height="100%"
                  marginRight={10}
                  paddingBottom={1}
                  bgColor="error"
                >
                  <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 20%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      // image={`http://localhost:4000/${ele.path[1]}`}
                      image={`http://localhost:4000/${ele.path[0]}`}
                      alt="product image"
                    />
                    <CardContent>
                      <MDTypography gutterBottom variant="h5" component="div">
                        {ele.title}
                      </MDTypography>
                      <Typography variant="body2" color="text.secondary">
                        {ele.brand}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        PKR/- {ele.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <MDButton
                        color="info"
                        onClick={() =>
                          navigate("/productView", {
                            state: { products: ele },
                          })
                        }
                      >
                        View
                      </MDButton>
                    </CardActions>
                  </Card>
                </MDBox>
              ))}
            </div>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
