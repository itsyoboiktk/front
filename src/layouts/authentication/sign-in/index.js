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

import { useState } from "react";
import Box from "@mui/material/Box";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("i");
    const data = new FormData(event.currentTarget);
    const check = {
      email: data.get("email"),
      password: data.get("password"),
    };
    axios
      .post("http://localhost:4000/manager/login", check)
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("token", "Bearer " + result.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        // setOpen(true);
        console.log(err);
      });
  };

  return (
    <BasicLayout image={bgImage}>
      <Card sx={{ mt: 5 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "primary.main",
            mx: 2,
            mt: 2,
            p: 2,
            mb: 1,
          }}
          // variant="gradient"
          // bgColor="info"
          // borderRadius="lg"
          // coloredShadow="info"
          // display="flex"
          // flexDirectiom="column"
          // mx={2}
          // mt={-3}
          // p={2}
          // mb={1}
          // textAlign="center"
          // alignItems="center"
        >
          <Avatar alt="SneakerLogo" src="../sneaklogo.png" sx={{ width: 80, height: 80 }} />{" "}
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </Box>
        <MDBox pt={4} pb={3} px={3}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <MDBox mb={2}>
              <TextField margin="normal" required fullWidth label="Email Address" name="email" />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <Button
                // onClick={() =>}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </MDBox>
            <MDBox mt={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mt={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Forgot Password?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Click Here
                </MDTypography>
              </MDTypography>
            </MDBox>
          </Box>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
