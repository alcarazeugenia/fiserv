import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InvoiceTable from "./InvoiceTable";
import ScrollableInvoiceTable from "./ScrollableInvoiceTable";
import InvoiceDetails from "./InvoiceDetails";

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  background: theme.palette.common.white,
  height: "100%",
  flex: 2,
}));
const Content = styled(Box)(({ theme }) => ({
  height: "70%",
  width: "85%",
  maxHeight: "740px",
  minHeight: "300px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

const Totals = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
}));
const InvoiceDetailContainer = styled(Box)(({ theme }) => ({
  flex: 2,
  marginRight: "10%",
}));
const Total = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingRight: "16px",
}));

const InvoiceSection = () => {
  return (
    <Container>
      <Content>
        <Typography
          variant="subtitle1"
          sx={{ color: "primary.main", textTransform: "uppercase" }}
        >
          Invoice
        </Typography>
        {/* <InvoiceTable /> */}
        <ScrollableInvoiceTable />
        <Totals>
          <InvoiceDetailContainer>
            <InvoiceDetails />
          </InvoiceDetailContainer>
          <Total>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                textAlign: "right",
              }}
            >
              Total
            </Typography>
            <Typography variant="caption" sx={{ color: "secondary.main" }}>
              $ 4,800.00
            </Typography>
          </Total>
        </Totals>
      </Content>
    </Container>
  );
};

export default InvoiceSection;
