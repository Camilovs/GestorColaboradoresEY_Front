import { Chip, Grid, Typography } from "@mui/material";
import { NivelConocimientos } from "./NivelConocimientos";
import { useGetInfoColaborador } from "../../../hooks/useGetInfoColaborador";
import sectores from "../../../api/sectores.json";

export const InfoColaborador = ({ user }) => {
  const { dataExtraUser } = useGetInfoColaborador(user.ID);

  return (
    <>
      <Typography sx={{ fontSize: "13px" }}>
        <strong>Correo: </strong>
        {user.correo}
      </Typography>
      <NivelConocimientos items={dataExtraUser.conocimiento} />
      <Grid container spacing={1}>
        {dataExtraUser.experiencias?.map((exp, i) => (
          <Grid item key={i}>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: "12px" }}
              label={
                sectores.find((sector) => sector.ID === exp.ID_Rubro)?.nombre
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
