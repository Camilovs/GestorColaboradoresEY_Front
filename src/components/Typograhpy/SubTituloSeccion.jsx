import { Typography } from "@mui/material";

export const SubTituloSeccion = ({ children }) => {
  return (
    <Typography sx={{ mb: 3 }} variant="subtitle1">
      {children}
    </Typography>
  );
};
