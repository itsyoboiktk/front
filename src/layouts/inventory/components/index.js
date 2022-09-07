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
// import homeDecor2 from "assets/images/home-decor-2.jpg";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";
import "./inventory.css";
// Material Dashboard 2 React components
import homeDecor2 from "assets/images/home-decor-2.jpg";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Cdata from "./data";

// import DataTable from "examples/Tables/DataTable";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";

function InentoryStuff() {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  // const [product, setProduct] = React.useState();
  // Cdata.map(setProduct);
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      <Box display="flex" flex-wrap="wrap" justify-content="center">
        {Cdata.map((ele) => (
          <MDBox
            display="flex"
            flex-wrap="wrap"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="100%"
          >
            <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 20%" }}>
              <CardMedia component="img" height="140" image={homeDecor2} alt="product image" />
              <CardContent>
                <MDTypography gutterBottom variant="h5" component="div">
                  {ele.name}
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
                  onClick={() =>
                    navigate("/productView", {
                      state: { products: ele },
                    })
                  }
                >
                  View
                </MDButton>
                <MDButton size="small">Edit</MDButton>
                <MDButton size="small">Delete</MDButton>
              </CardActions>
            </Card>
          </MDBox>
        ))}
      </Box>
    </div>
  );
}

export default InentoryStuff;
