import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import {
  Container,
  MessageContainer,
  PagesContainer,
  Pages,
} from "./InvoiceSectionStyles";
import styles from "./InvoiceLoader.module.css";

const InvoiceMenu = ({
  invoiceInfo,
  handleInvoiceByIndex,
  invoiceLoading,
  handleCurrentInvoice,
}) => {
  useEffect(() => {
    console.log(invoiceInfo);
  }, [invoiceInfo]);
  return (
    <Container>
      <MessageContainer>
        {invoiceInfo.length === 0 ? (
          <>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              There are no invoices uploaded yet
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              You can upload some at the left to try the App.
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              We have read a total of {invoiceInfo.length}
              {invoiceInfo.length > 1 ? " pages" : " page"}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Click in the options below to access the invoices.
            </Typography>
            <PagesContainer>
              {invoiceInfo.map((file, index) => (
                <Pages
                  key={index}
                  variant="button"
                  onClick={() => {
                    handleInvoiceByIndex(file);
                    handleCurrentInvoice(index);
                  }}
                >
                  Page {index + 1}
                </Pages>
              ))}
            </PagesContainer>
          </>
        )}
      </MessageContainer>
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

export default InvoiceMenu;
