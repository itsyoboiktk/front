/* eslint-disable no-use-before-define */
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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";
import "./signup.css";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { StayPrimaryLandscape } from "@mui/icons-material";

function Cover() {
  // const [name, setName] = React.useState("");
  // const [comp, setComp] = React.useState("");
  // const [addr, setAddr] = React.useState(false);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    const data = new FormData(event.currentTarget);
    const newMan = {
      name: data.get("firstName"),
      comp: data.get("company"),
      addr: data.get("address"),
      email: data.get("email"),
      pass: data.get("password"),
    };
    axios.post("http://localhost:4000/manager/register", newMan).then((res) => {
      console.log(res);
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("here");
  //   const data = new FormData(event.currentTarget);
  //   sendData(data);
  // };
  // const sendData = (data) => {
  //   console.log(data);
  //   axios.post("http://localhost:4000/manager/register", data).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <CoverLayout image={bgImage} sx={{ justifyContent: "center" }}>
      <Card sx={{ width: 400, padding: 2 }}>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="SneakerLogo" src="../sneaklogo.png" sx={{ width: 60, height: 60 }} />{" "}
          <MDTypography variant="h5" fontWeight="medium" mt={1}>
            SneakAR
          </MDTypography>
          <MDTypography variant="h6" display="block" my={1}>
            Become a Seller
          </MDTypography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  // onChange={(x) => setName(x.target.value)}
                  // value={name}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="primary"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  // onChange={(x) => setEmail(x.target.value)}
                  // value={email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // onChange={(x) => setComp(x.target.value)}
                  // value={comp}
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="Company"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // onChange={(x) => setAddr(x.target.value)}
                  // value={addr}
                  id="Address"
                  label="Address"
                  name="address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // onChange={(x) => setPassword(x.target.value)}
                  // value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive marketing promotions via email."
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
