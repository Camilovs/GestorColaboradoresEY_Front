import {
  Avatar,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import sectores from "../../api/sectores.json";
import conocimiento from "../../api/conocimiento.json";

export const CardColaboradorVertical = ({ user }) => {
  const AVATAR_SIZE = 60;
  return (
    <Paper sx={{ width: "300px", height: "100%", p: 3 }}>
      <Grid container flexDirection={"column"} alignItems={"center"}>
        <Grid item>
          <Avatar
            sx={{
              mt: 1,
              mb: 1,
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
            }}
          >
            {user.nombre.charAt(0)}
            {user.apellido.charAt(0)}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: "500" }}>
            {user.nombre} {user.apellido}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{user.correo}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderTop: "1px solid #f5f5f5", mt: 2, pt: 3, pb: 3 }}
        alignItems={"center"}
      >
        {user.conocimiento?.map((item, i) => (
          <Fragment key={i}>
            <Grid item xs={6} sx={{ fontSize: "12px" }}>
              {
                conocimiento.find((itemApi) => itemApi.ID === item.ID_Item)
                  ?.nombre
              }
            </Grid>
            <Grid item xs={6}>
              <LinearProgress
                sx={{ height: 6 }}
                variant="determinate"
                value={parseInt(item.nivel) * 10}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
      <Typography sx={{ fontSize: "13px", mb: 1 }}>Experiencia</Typography>
      <Grid container spacing={0.5}>
        {user.experiencias?.map((item, i) => (
          <Grid item key={i}>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: "12px" }}
              label={
                sectores.find((sector) => sector.ID === item.ID_Rubro)?.nombre
              }
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
