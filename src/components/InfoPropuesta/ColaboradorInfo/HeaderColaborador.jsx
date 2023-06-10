import { Avatar, Grid, Typography } from "@mui/material";
import roles from "../../../api/roles.json";
export const HeaderColaborador = ({ user }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar sx={{ top: "50%", mt: "-20px", ml: 2, width: 40, height: 40 }}>
          {user.nombre.charAt(0)}
          {user.apellido.charAt(0)}
        </Avatar>
      </Grid>
      <Grid item>
        <Typography>
          {user.nombre} {user.apellido}
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "gray", fontStyle: "italic" }}>
          {roles.find((rol) => rol.ID == user.rol)?.nombre || ""}
        </Typography>
      </Grid>
    </Grid>
  );
};
