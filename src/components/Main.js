import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadSection from "./Upload/UploadSection";
import InvoiceSection from "./Invoice/InvoiceSection";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70vh",
  minHeight: "600px",
  maxHeight: "720px",
  width: "85%",
  minWidth: "830px",
  maxWidth: "1230px",
}));

const Main = () => {
  return (
    <div>
      <Container>
        <UploadSection />
        <InvoiceSection />
      </Container>
    </div>
  );
};

export default Main;
