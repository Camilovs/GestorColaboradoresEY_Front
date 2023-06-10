import { Chip, Grid, Paper, Typography } from "@mui/material";
import { CardColaboradorVertical } from "./CardColaboradorVertical";
import { HandleSelectColaborador } from "./HandleSelectColaborador";
import { useGetUsuarios } from "../../hooks/useGetUsuarios";
import { FiltrosColaborador } from "../FiltrosColaborador/FiltrosColaborador";
import { useFiltrarColaboradores } from "../../hooks/useFiltrarColaboradores";
import { useState } from "react";
import { ErrorMessage } from "../Typograhpy/ErrorMessage";

export const ColaboradoresBox = ({
  addColaborador,
  seleccionados,
  quitarColaborador,
}) => {
  const isSelected = (user) => {
    return seleccionados.includes(user);
  };
  const { dataUsuarios } = useGetUsuarios();
  const [filtros, setFiltros] = useState({});
  const [noData, setNoData] = useState(false);
  const { dataFiltrada } = useFiltrarColaboradores(
    dataUsuarios,
    filtros,
    setNoData
  );

  return (
    <>
      <FiltrosColaborador setData={setFiltros} />
      {noData && <ErrorMessage>0 resultados</ErrorMessage>}
      {dataFiltrada && dataFiltrada.length > 0 && (
        <Paper sx={{ backgroundColor: "#f5f5f5", mt: 2, p: 3, mb: 2 }}>
          <Grid container spacing={2}>
            {dataFiltrada?.map((user, i) => (
              <Grid key={i} item>
                <HandleSelectColaborador
                  addColaborador={addColaborador}
                  user={user}
                  isSelected={isSelected(user.correo)}
                >
                  <CardColaboradorVertical user={user} />
                </HandleSelectColaborador>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
      {seleccionados.length > 0 && (
        <>
          <Typography sx={{ mb: 2 }}>Seleccionados:</Typography>
          <Grid container spacing={1}>
            {seleccionados.map((user, i) => (
              <Grid item key={i}>
                <Chip label={user} onDelete={() => quitarColaborador(user)} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
