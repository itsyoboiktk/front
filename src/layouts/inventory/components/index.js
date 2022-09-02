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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
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

  return (
    <Card id="delete-account">
      <CardMedia
        component="img"
        height="140"
        image="assets/images/team-2.jpg"
        alt="product image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shoe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Nike
        </Typography>
        <Typography variant="body2" color="text.secondary">
          4000
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default InentoryStuff;
