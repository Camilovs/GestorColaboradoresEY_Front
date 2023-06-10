import { Divider, Grid, Paper, Typography } from "@mui/material";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { FiltrosColaborador } from "../components/FiltrosColaborador/FiltrosColaborador";
import { useGetUsuarios } from "../hooks/useGetUsuarios";
import { CardColaboradorVertical } from "../components/ColaboradoresBox/CardColaboradorVertical";
import { Content } from "../components/BaseLayout/Content";
import { TituloSeccion } from "../components/Typograhpy/TituloSeccion";
import { useState } from "react";
import { useFiltrarColaboradores } from "../hooks/useFiltrarColaboradores";
import { ErrorMessage } from "../components/Typograhpy/ErrorMessage";

export const BusquedaPage = () => {
  const { dataUsuarios } = useGetUsuarios();
  const [filtros, setFiltros] = useState({});
  const [noData, setNoData] = useState(false);
  const { dataFiltrada } = useFiltrarColaboradores(
    dataUsuarios,
    filtros,
    setNoData
  );
  return (
    <BaseLayout>
      <Content>
        <TituloSeccion>Búsqueda de colaboradores</TituloSeccion>
        <Divider />
        <Typography sx={{ mb: 2, mt: 2 }}>Filtros</Typography>
        <FiltrosColaborador setData={setFiltros} />
        {noData && <ErrorMessage>0 resultados</ErrorMessage>}
        {dataFiltrada && dataFiltrada.length > 0 && (
          <Paper sx={{ backgroundColor: "#f5f5f5", mt: 2, p: 3, mb: 2 }}>
            <Grid container spacing={2}>
              {dataFiltrada?.map((user, i) => (
                <Grid key={i} item>
                  <CardColaboradorVertical user={user} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        )}
      </Content>
    </BaseLayout>
  );
};
