import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  height: "40px",
}));

const InvoiceDetail = ({ shortInputs = true, label, content }) => {
  return (
    <Content sx={{ width: shortInputs ? "45%" : "100%" }}>
      <Typography variant="body1" sx={{ fontWeight: 700, marginRight: "10px" }}>
        {label}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Content>
  );
};

export default InvoiceDetail;
