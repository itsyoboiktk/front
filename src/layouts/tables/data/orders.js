/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Paper,
} from "@mui/material";
import Modal from "@mui/material/Modal"; 
import MDBox from "components/MDBox";
import TablePagination from '@mui/material/TablePagination';
// import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

const rows = [{
    "orderName": "Zamit",
    "orderNo": 1,
    "price": 38,
    "city": "Armenia",
    "action": "interactive",
    "status": "Advanced"
  }, {
    "orderName": "Sonsing",
    "orderNo": 2,
    "price": 62,
    "city": "Abaeté",
    "action": "zero defect",
    "status": "Synergized"
  }, {
    "orderName": "Stim",
    "orderNo": 3,
    "price": 72,
    "city": "Bressuire",
    "action": "zero tolerance",
    "status": "Down-sized"
  }, {
    "orderName": "Latlux",
    "orderNo": 4,
    "price": 55,
    "city": "Tegalsari",
    "action": "Persistent",
    "status": "exuding"
  }, {
    "orderName": "Lotlux",
    "orderNo": 5,
    "price": 41,
    "city": "Puteran Kidul",
    "action": "tertiary",
    "status": "Phased"
  }, {
    "orderName": "Alpha",
    "orderNo": 6,
    "price": 98,
    "city": "Mpanda",
    "action": "Polarised",
    "status": "Persistent"
  }, {
    "orderName": "Redhold",
    "orderNo": 7,
    "price": 41,
    "city": "Tengah",
    "action": "matrix",
    "status": "projection"
  }, {
    "orderName": "Aerified",
    "orderNo": 8,
    "price": 53,
    "city": "Jiangmen",
    "action": "hierarchy",
    "status": "knowledge base"
  }, {
    "orderName": "Daltfresh",
    "orderNo": 9,
    "price": 40,
    "city": "Pringsewu",
    "action": "radical",
    "status": "Devolved"
  }, {
    "orderName": "Fixflex",
    "orderNo": 10,
    "price": 63,
    "city": "Svirsk",
    "action": "alliance",
    "status": "Organic"
  
  }]
  
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
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("Row Clicked Here")
  };
  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
                <TableCell>Order Name</TableCell>
                <TableCell>Order No.</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                (rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row) => (
                    <TableRow key={row.id} 
                    onClick={() => handleOpen(row.id)}
                    // align={column.align}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
                    >
                <TableCell
                >{row.orderName}</TableCell>
                <TableCell>{row.orderNo}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.status}</TableCell>
                    </TableRow>

                ))
            }{emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
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
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <MDBox bgColor="light">
              <MDTypography variant="h6" component="h2">
                The Orders details should be shown here
              </MDTypography>
            </MDBox>
          </Modal>
    </TableContainer>
    </Paper>
    
  );
};

export default OrderTable;
