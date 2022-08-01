import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadSection from "./Upload/UploadSection";
import InvoiceSection from "./Invoice/InvoiceSection";
import InvoiceMenu from "./Invoice/InvoiceMenu";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90vh",
  minHeight: "700px",
  maxHeight: "900px",
  width: "95%",
  minWidth: "830px",
  maxWidth: "1300px",
}));

const Main = () => {
  const [invoiceLoading, setInvoiceLoading] = useState(null);
  const [invoiceByIndex, setInvoiceByIndex] = useState(null);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const [invoiceInfo, setInvoiceInfo] = useState([]);

  const handleInvoiceLoading = (state) => {
    setInvoiceLoading(state);
  };

  const handleInvoiceInfo = (info) => {
    setInvoiceInfo(info);
  };

  const handleInvoiceByIndex = (invoice) => {
    setInvoiceByIndex(invoice);
  };

  const handleCurrentInvoice = (currentIndex) => {
    setCurrentInvoice(currentIndex);
  };

  return (
    <div>
      <Container>
        <UploadSection
          handleInvoiceLoading={handleInvoiceLoading}
          handleInvoiceInfo={handleInvoiceInfo}
        />

        {invoiceByIndex ? (
          <InvoiceSection
            invoiceLoading={invoiceLoading}
            invoiceByIndex={invoiceByIndex}
          />
        ) : (
          <InvoiceMenu
            invoiceInfo={invoiceInfo}
            handleInvoiceByIndex={handleInvoiceByIndex}
            handleCurrentInvoice={handleCurrentInvoice}
            invoiceLoading={invoiceLoading}
          ></InvoiceMenu>
        )}
      </Container>
    </div>
  );
};

export default Main;
