import { Typography } from "@mui/material";

export const TituloSeccion = ({ children }) => {
  return (
    <Typography
      sx={{ mb: 3, color: "#1976d2", fontWeight: "600" }}
      variant="h6"
    >
      {children}
    </Typography>
  );
};
