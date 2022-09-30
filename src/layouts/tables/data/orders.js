/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
// import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { useTheme, styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  Grid,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import TablePagination from "@mui/material/TablePagination";
// import MDButton from "components/MDButton";
// import MDButton from "components/MDButton";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const row2 = [
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello2",
    orderNo: 1,
    price: 38,
    city: "Islamabad",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
  {
    orderName: "Hello",
    orderNo: 1,
    price: 38,
    city: "Karachi",
    status: "Pending",
  },
];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function OrderTable() {
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const [orders, setOrders] = React.useState([]);
  const [ordersD, setOrdersD] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:4000/order/display")
      .then((res) => {
        setOrders(res.data);
        setOrdersD(res.data.items);
        console.log("hello", orders.items);
        console.log("hi", ordersD);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
    overflow: "auto",
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell align="right">Order Date</StyledTableCell>
              <StyledTableCell align="right">Order Time</StyledTableCell>
              <StyledTableCell align="right">Payment Method</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : orders
            ).map((ele) => (
              <StyledTableRow
                key={ele.id}
                onClick={(x) => handleOpen2(x.target.id)}
                // align={column.align}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>{ele._id}</StyledTableCell>
                <StyledTableCell>{ele.orderDate}</StyledTableCell>
                <StyledTableCell>{ele.orderTime}</StyledTableCell>
                <StyledTableCell>{ele.paymentMethod}</StyledTableCell>
                <StyledTableCell>{ele.status}</StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <MDBox bgColor="light" coloredShadow="dark" sx={style2}>
            <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
              <Grid container wrap="nowrap" spacing={2} style={{ overflow: "auto" }}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <TableContainer>
                    <Table aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Shoe Name</StyledTableCell>
                          <StyledTableCell align="right">Shoe Size</StyledTableCell>
                          <StyledTableCell align="right">Price</StyledTableCell>
                          <StyledTableCell align="right">City</StyledTableCell>
                          <StyledTableCell align="right">Status</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          // eslint-disable-next-line no-shadow
                          row2.map((ele) => (
                            <StyledTableRow
                              key={ele.id}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <StyledTableCell>{ele.title}</StyledTableCell>
                              {/* <StyledTableCell>{row2.orderNo}</StyledTableCell>
                              <StyledTableCell>{row2.price}</StyledTableCell>
                              <StyledTableCell>{row2.city}</StyledTableCell>
                              <StyledTableCell>{row2.status}</StyledTableCell> */}
                            </StyledTableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          </MDBox>
        </Modal>
      </TableContainer>
    </Paper>
  );
}

export default OrderTable;
