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

function createData(description, lineValue) {
  return { description, lineValue };
}

const rows = [
  createData("Invoice nº :", "40-1203"),
  createData("Due Date:", "07th June 2022"),
];

const InvoiceDetails = () => {
  return (
    <Table
      sx={{ minWidth: "100%", minHeight: "100%" }}
      aria-label="simple table"
    >
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.description}>
            <StyledTableCell component="th" scope="row">
              {row.description}
            </StyledTableCell>
            <StyledTableCell align="left">{row.lineValue}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InvoiceDetails;
