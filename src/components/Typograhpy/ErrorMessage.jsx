import { Typography } from "@mui/material";

export const ErrorMessage = ({ children }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        mb: 1,
        color: "#666666",
        fontWeight: "200",
        fontStyle: "italic",
      }}
    >
      {children}
    </Typography>
  );
};
