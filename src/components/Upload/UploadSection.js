import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "100%",
  width: "40%",
  minWidth: "350px",
  position: "relative",
}));
const Content = styled(Box)(({ theme }) => ({
  height: "70%",
  width: "60%",
  maxHeight: "740px",
  minHeight: "300px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.common.white,
}));

const UploadButton = styled(Button)(({ theme }) => ({
  width: "100%",
  background: theme.palette.secondary.main,
  height: "60px",
  borderRadius: "30px",
  "&&:hover": {
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
  },
}));

const UploadSection = () => {
  return (
    <Container>
      <Content>
        <Typography variant="subtitle2">Hey!</Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Upload your files here to see your final invoice
        </Typography>
        <UploadButton variant="contained">Upload</UploadButton>
        <Typography variant="body1" sx={{ minHeight: "54px" }}>
          No files selected
        </Typography>
      </Content>
    </Container>
  );
};

export default UploadSection;
