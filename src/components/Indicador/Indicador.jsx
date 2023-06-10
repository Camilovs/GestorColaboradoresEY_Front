import { Card, CardContent, Typography } from "@mui/material";

export const Indicador = ({ color, number, label }) => {
  return (
    <Card sx={{ backgroundColor: color, width: "300px", pl: 2 }}>
      <CardContent>
        <Typography variant="h3" sx={{ color: "white", fontWeight: "900" }}>
          {number}
        </Typography>
        <Typography
          sx={{ color: "white", fontSize: "18px", fontWeight: "400" }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};
