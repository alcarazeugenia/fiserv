import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import InvoiceDetail from "./InvoiceDetail";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const HorizontalContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const InvoiceDetails = ({ invoiceInfo }) => {
  const dateFormatted = new Date(invoiceInfo?.InvoiceDate?.value);

  return (
    <Container>
      <HorizontalContent>
        <InvoiceDetail
          label="Supplier:"
          content={invoiceInfo?.VendorName?.value}
        />
        <InvoiceDetail
          label="Invoice Date:"
          //content={invoiceInfo?.InvoiceDate?.value}
          content={dateFormatted.toDateString()}
        />
      </HorizontalContent>

      <HorizontalContent>
        <InvoiceDetail label="Shipping nº:" />
        <InvoiceDetail
          label="Purchase Order:"
          content={invoiceInfo?.PurchaseOrder?.value}
        />
      </HorizontalContent>

      <HorizontalContent sx={{ marginBottom: "20px" }}>
        <InvoiceDetail
          label="Ship to:"
          content={invoiceInfo?.ShippingAddressRecipient?.value}
        />
        <InvoiceDetail label="Package nº:" />
      </HorizontalContent>

      <InvoiceDetail
        label="Supplier Address:"
        shortInputs={false}
        content={invoiceInfo?.VendorAddress?.value}
      />
      <InvoiceDetail
        label="Invoice to Address:"
        shortInputs={false}
        content={invoiceInfo?.CustomerAddress?.value}
      />
    </Container>
  );
};

export default InvoiceDetails;
