/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
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
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";
import "./inventory.css";
// Material Dashboard 2 React components
// import homeDecor2 from "assets/images/home-decor-2.jpg";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
// import DataTable from "examples/Tables/DataTable";

// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";

// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";

function InventoryStuff() {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  // const [product, setProduct] = React.useState();
  // Cdata.map(setProduct);
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [id, setId] = React.useState("");
  const handleOpen = (_id) => {
    setId(_id);
    console.log(_id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const sID = "633023a31822a313b1cc2097";

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:4000/product/delete/${id}`)
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/product/inventory/display/${sID}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [open]);

  return (
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
              <MDButton
                variant="gradient"
                color="info"
                onClick={() => handleOpen(ele._id)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </MDButton>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
          >
            <MDBox bgColor="light" coloredShadow="dark" sx={styleModal}>
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
            </MDBox>
          </Modal>
        </MDBox>
      ))}
    </div>
  );
}

export default InventoryStuff;
