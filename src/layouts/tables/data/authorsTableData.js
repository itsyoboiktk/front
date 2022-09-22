/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  // const tableData = [
  //   {
  //     orderName: "Zamit",
  //     orderNo: 1,
  //     price: 38,
  //     city: "Armenia",
  //     action: "interactive",
  //     status: "Advanced",
  //   },
  //   {
  //     orderName: "Sonsing",
  //     orderNo: 2,
  //     price: 62,
  //     city: "Abaeté",
  //     action: "zero defect",
  //     status: "Synergized",
  //   },
  //   {
  //     orderName: "Stim",
  //     orderNo: 3,
  //     price: 72,
  //     city: "Bressuire",
  //     action: "zero tolerance",
  //     status: "Down-sized",
  //   },
  //   {
  //     orderName: "Latlux",
  //     orderNo: 4,
  //     price: 55,
  //     city: "Tegalsari",
  //     action: "Persistent",
  //     status: "exuding",
  //   },
  //   {
  //     orderName: "Lotlux",
  //     orderNo: 5,
  //     price: 41,
  //     city: "Puteran Kidul",
  //     action: "tertiary",
  //     status: "Phased",
  //   },
  //   {
  //     orderName: "Alpha",
  //     orderNo: 6,
  //     price: 98,
  //     city: "Mpanda",
  //     action: "Polarised",
  //     status: "Persistent",
  //   },
  //   {
  //     orderName: "Redhold",
  //     orderNo: 7,
  //     price: 41,
  //     city: "Tengah",
  //     action: "matrix",
  //     status: "projection",
  //   },
  //   {
  //     orderName: "Aerified",
  //     orderNo: 8,
  //     price: 53,
  //     city: "Jiangmen",
  //     action: "hierarchy",
  //     status: "knowledge base",
  //   },
  //   {
  //     orderName: "Daltfresh",
  //     orderNo: 9,
  //     price: 40,
  //     city: "Pringsewu",
  //     action: "radical",
  //     status: "Devolved",
  //   },
  //   {
  //     orderName: "Fixflex",
  //     orderNo: 10,
  //     price: 63,
  //     city: "Svirsk",
  //     action: "alliance",
  //     status: "Organic",
  //   },
  // ];

  const Order = ({ image, name, id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1} borderColor="red" borderWidth={2}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{id}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Order Name & No.", accessor: "order", width: "45%", align: "left" },
      { Header: "Price", accessor: "price", align: "left" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],
    rows: [
      {
        order: <Order image={team2} name="Nike Sneaker" id="123" />,
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Rs 1200/-
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        city: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Karachi
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Dispatch
          </MDTypography>
        ),
      },
      {
        order: <Order image={team3} name="Nike Show" id="111" />,
        price: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Rs 1200/-
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        city: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Lahore
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Dispatch
          </MDTypography>
        ),
      },
      // {
      //   order: <Order image={team4} name="Laurent Perrier" id="laurent@creative-tim.com" />,
      //   price: <Job title="Executive" description="Projects" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   city: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       19/09/17
      //     </MDTypography>
      //   ),
      //   action: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       Edit
      //     </MDTypography>
      //   ),
      // },
      // {
      //   order: <Order image={team3} name="Michael Levi" id="michael@creative-tim.com" />,
      //   price: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   city: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       24/12/08
      //     </MDTypography>
      //   ),
      //   action: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       Edit
      //     </MDTypography>
      //   ),
      // },
      // {
      //   order: <Order image={team3} name="Richard Gran" id="richard@creative-tim.com" />,
      //   price: <Job title="Manager" description="Executive" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   city: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       04/10/21
      //     </MDTypography>
      //   ),
      //   action: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       Edit
      //     </MDTypography>
      //   ),
      // },
      // {
      //   order: <Order image={team4} name="Miriam Eric" id="miriam@creative-tim.com" />,
      //   price: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   city: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       14/09/20
      //     </MDTypography>
      //   ),
      //   action: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       Edit
      //     </MDTypography>
      //   ),
      // },
    ],
  };
}
