import React from "react";
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
    borderColor: theme.palette.secondary.main,
  },
  "&:nth-of-type(2)": {
    width: "35%",
  },
}));
const StyledTableHeader = styled(TableHead)(({ theme }) => ({
  "& > tr th ": {
    fontSize: "13px",
    fontWeight: 700,
    background: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
  },
}));

const columns = [
  { id: 1, name: "Line nº", align: "center" },
  { id: 2, name: "Item nº", align: "center" },
  { id: 3, name: "Description", align: "center" },
  { id: 4, name: "Quantity", align: "center" },
  { id: 5, name: "Unit Price", align: "center" },
  { id: 6, name: "Total", align: "center" },
];

function createData(
  lineNumber,
  itemNumber,
  description,
  quantity,
  unitPrice,
  total
) {
  return { lineNumber, itemNumber, description, quantity, unitPrice, total };
}

const rows = [
  createData(1, 1002, "Description 1", 20, 150),
  createData(2, 1420, "Description 2", 1, 200),
  createData(3, 1340, "Description 3", 14, 1000),
  createData(4, 7890, "Description 4", 9, 300),
  createData(5, 2907, "Description 5", 17, 750),
  createData(6, 4489, "Description 6", 2, 600),
  createData(7, 7358, "Description 7", 30, 590),
  createData(8, 1234, "Description 8", 21, 350),
];

const ScrollableInvoiceTable = ({ invoiceInfo = [] }) => {
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
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </StyledTableHeader>
          <TableBody>
            {invoiceInfo.map((row, i) => {
              return (
                <TableRow role="checkbox" tabIndex={-1} key={Math.random()}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.ProductCode?.value}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.Description?.value}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.Quantity?.value}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.UnitPrice?.value}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.Amount?.value}
                  </StyledTableCell>
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
