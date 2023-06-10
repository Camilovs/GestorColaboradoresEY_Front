import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const CardColaborador = ({ data }) => {
  const [selected, setSelected] = useState(false);

  const handleAddColaborador = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleAddColaborador}>
      <Card sx={{ display: "flex", border: selected && "2px solid #1976d2" }}>
        <Box sx={{ position: "relative" }}>
          <Avatar
            sx={{ top: "50%", mt: "-40px", ml: 2, width: 80, height: 80 }}
          >
            US
          </Avatar>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {data.nombre}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {data.rol}
            </Typography>
            <Grid sx={{ mt: 1 }} container spacing={1}>
              {data.aptitudes.map((aptitud, i) => (
                <Grid item key={i}>
                  <Chip label={aptitud} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
