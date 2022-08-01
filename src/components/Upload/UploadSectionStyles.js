import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "100%",
  width: "40%",
  minWidth: "350px",
  position: "relative",
}));
export const Content = styled(Box)(({ theme }) => ({
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

export const SelectedDocumentsContainer = styled(Box)(({ theme }) => ({
  height: "120px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  flexWrap: "no-wrap",
  alignItems: "center",
  justifyContent: "center",
}));
