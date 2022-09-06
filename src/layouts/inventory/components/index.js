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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Cdata from "./data";
// import MDTypography from "components/MDTypography";
// import DataTable from "examples/Tables/DataTable";
// import MDButton from "components/MDButton";

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
  console.log(Cdata[0].name);
  const navigate = useNavigate();

  return (
    <MDBox>
      {Cdata.map((ele) => (
        <div display="flex" key={ele}>
          <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 20%" }}>
            <CardMedia
              component="img"
              height="140"
              image="/assets/images/bruce-mars.jpg"
              alt="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/layouts/productView/index", {})}>View</Button>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </MDBox>
  );
}

export default InentoryStuff;
