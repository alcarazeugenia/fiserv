import React from "react";
import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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
  },
}));

function createData(description, lineTotal) {
  return { description, lineTotal };
}

const rows = [
  createData("Line 1", 900),
  createData("Line 2", 1500),
  createData("Line 3", 2200),
];

const InvoiceTable = () => {
  return (
    <Table
      sx={{ minWidth: "100%", minHeight: "230px" }}
      aria-label="simple table"
    >
      <StyledTableHeader>
        <TableRow>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell align="right">Line Total</StyledTableCell>
        </TableRow>
      </StyledTableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.description}>
            <StyledTableCell component="th" scope="row">
              {row.description}
            </StyledTableCell>
            <StyledTableCell align="right">{row.lineTotal}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InvoiceTable;
