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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import UpdateProduct from "layouts/updatePage/components/index";
// import Invoices from "layouts/billing/components/Invoices";
// import BillingInformation from "layouts/billing/components/BillingInformation";
// import Transactions from "layouts/billing/components/Transactions";

function UpdateProductPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8} mb={3}>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item spacing={5} xl={8}>
            <UpdateProduct />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UpdateProductPage;
