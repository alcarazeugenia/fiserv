import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  background: theme.palette.common.white,
  height: "100%",
  flex: 2,
}));

export const Content = styled(Box)(({ theme }) => ({
  height: "85%",
  width: "80%",
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

export const InvoiceTitleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
}));

export const Totals = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
}));

export const InvoiceDetailContainer = styled(Box)(({ theme }) => ({
  flex: 2,
  marginRight: "10%",
}));

export const Total = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingRight: "16px",
}));

export const MessageContainer = styled(Box)(({ theme }) => ({
  height: "90%",
  width: "85%",
  maxHeight: "740px",
  minHeight: "300px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const PagesContainer = styled(Box)(({ theme }) => ({
  marginTop: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const Pages = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.main,
  transition: "all 0.3s ease",
  marginBottom: "5px",

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const GoBack = styled(Box)(({ theme }) => ({
  fill: theme.palette.primary.main,
  marginTop: "1%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  "& > svg": {
    marginLeft: "5px",
    marginRight: "5px",
    transform: "scale(-1, -1)",
    fill: theme.palette.primary.main,
  },
}));

export const Next = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "2%",
  cursor: "pointer",
  transition: "all 0.6s ease",
  "& > svg": {
    fill: theme.palette.primary.main,
    transition: "all 0.3s ease",
  },
  "&:hover": {
    "& > svg": {
      fill: theme.palette.secondary.main,
    },
  },
}));
export const Previous = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "2%",
  cursor: "pointer",
  transform: "scale(-1, -1)",
  "& > svg": {
    fill: theme.palette.primary.main,
  },
}));
