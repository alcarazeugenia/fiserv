import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: "13px",
    fontWeight: 400,
  },
}));
const StyledTableHeader = styled(TableHead)(({ theme }) => ({
  "& > tr th ": {
    fontSize: "13px",
    fontWeight: 700,
    background: theme.palette.common.white,
  },
}));

// const columns = [
//   { id: "name", label: "Data" },
//   { id: "other", label: "More Data" },
//   { id: "total", label: "Line Total", align: "right" },
// ];

// function createData(name, other, total) {
//   return { name, other, total };
// }

// const rows = [
//   createData("Line 1", "More Data", "900"),
//   createData("Line 2", "More Data", "1200"),
//   createData("Line 3", "More Data", "2500"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
//   createData("Line x", "x", "x"),
// ];

const columns = [
  { id: "name", label: "Data" },
  { id: "total", label: "Line Total", align: "right" },
];

function createData(name, total) {
  return { name, total };
}

const rows = [
  createData("Line 1", "900"),
  createData("Line 2", "1200"),
  createData("Line 3", "2500"),
  createData("Line x", "x"),
  createData("Line x", "x"),
  createData("Line x", "x"),
  createData("Line x", "x"),
  createData("Line x", "x"),
  createData("Line x", "x"),
  createData("Line x", "x"),
];

const ScrollableInvoiceTable = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "none",
        boxShadow: "none",
      }}
    >
      <TableContainer sx={{ maxHeight: 220 }}>
        <Table stickyHeader aria-label="sticky table">
          <StyledTableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableCell align={column.align} key={column.id}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </StyledTableHeader>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={Math.random()}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">{row.other}</StyledTableCell> */}
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ScrollableInvoiceTable;
