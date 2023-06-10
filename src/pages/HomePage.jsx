import { Divider, Grid } from "@mui/material";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { Content } from "../components/BaseLayout/Content";
import { Indicador } from "../components/Indicador/Indicador";
import { TablaPropuestas } from "../components/TablaPropuestas/TablaPropuestas";
import { TituloSeccion } from "../components/Typograhpy/TituloSeccion";
import { useState } from "react";
import { InfoPropuesta } from "../components/InfoPropuesta/InfoPropuesta";

export const HomePage = () => {
  const [propuestaSelected, setPropuestaSelected] = useState(false);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item>
          <Indicador color={"#E0593D"} label={"Colaboradores"} number={"--"} />
        </Grid>
        <Grid item>
          <Indicador color={"#3DE0A0"} label={"Propuestas"} number={"--"} />
        </Grid>
        <Grid item>
          <Indicador color={"#198094"} label={"Managers"} number={"--"} />
        </Grid>
      </Grid>
      <Content>
        <TituloSeccion>Tus propuestas</TituloSeccion>
        <Divider />
        <TablaPropuestas setPropuestaSelected={setPropuestaSelected} />
      </Content>
      {propuestaSelected && (
        <Content>
          <InfoPropuesta id={propuestaSelected} />
        </Content>
      )}
    </BaseLayout>
  );
};
