import { Paper } from "@mui/material";

export const Content = ({ children }) => {
  return <Paper sx={{ p: 3, mb: 2, mt: 3 }}>{children}</Paper>;
};
