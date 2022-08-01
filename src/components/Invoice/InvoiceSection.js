import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import InvoiceDetails from "./InvoiceDetails";
import ScrollableInvoiceTable from "./ScrollableInvoiceTable";
import styles from "./InvoiceLoader.module.css";
import Arrow from "../icons/Arrow";

import {
  Container,
  Content,
  Totals,
  Total,
  InvoiceTitleContainer,
  GoBack,
  Previous,
  Next,
} from "./InvoiceSectionStyles";

const InvoiceSection = ({ invoiceLoading, invoiceByIndex }) => {
  useEffect(() => {
    console.log(invoiceByIndex);
  }, [invoiceByIndex]);

  return (
    <Container>
      <GoBack>
        <Arrow></Arrow>
        <Typography variant="body1">Go back</Typography>
      </GoBack>
      <Previous>
        <Arrow></Arrow>
      </Previous>
      <Next>
        <Arrow></Arrow>
      </Next>

      <Content>
        <InvoiceTitleContainer>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.main", textTransform: "uppercase" }}
          >
            Invoice
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              fontSize: "36px",
            }}
          >
            {invoiceByIndex?.InvoiceId?.value}
          </Typography>
        </InvoiceTitleContainer>
        <InvoiceDetails invoiceInfo={invoiceByIndex} />
        <ScrollableInvoiceTable invoiceInfo={invoiceByIndex?.table} />
        <Totals>
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
              $ {invoiceByIndex?.InvoiceTotal?.value || "-"}
            </Typography>
          </Total>
        </Totals>
      </Content>
      {invoiceLoading && (
        <>
          <Box
            sx={{
              background: "rgba(231, 231, 231, 0.74)",
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 2,
            }}
          ></Box>
          <div className={styles["sk-chase"]}>
            <div className={styles["sk-chase-dot"]}></div>
            <div className={styles["sk-chase-dot"]}></div>
            <div className={styles["sk-chase-dot"]}></div>
            <div className={styles["sk-chase-dot"]}></div>
            <div className={styles["sk-chase-dot"]}></div>
            <div className={styles["sk-chase-dot"]}></div>
          </div>
        </>
      )}
    </Container>
  );
};

export default InvoiceSection;
