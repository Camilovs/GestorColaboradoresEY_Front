import { Button, Divider, Stack, Typography } from "@mui/material";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { Content } from "../components/BaseLayout/Content";
import { SubTituloSeccion } from "../components/Typograhpy/SubTituloSeccion";
import { TituloSeccion } from "../components/Typograhpy/TituloSeccion";
import { ColaboradoresBox } from "../components/ColaboradoresBox/ColaboradoresBox";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetPropuesta } from "../hooks/useGetPropuesta";
import baseApi from "../api/baseApi";

export const AddColaboradorPage = () => {
  const [seleccionados, setSeleccionados] = useState([]);
  const [searchparams] = useSearchParams();
  const { propuestaState } = useGetPropuesta(
    searchparams.get("idPropuesta") || ""
  );

  const addColaborador = (nuevo) => {
    if (!seleccionados.includes(nuevo)) {
      setSeleccionados([...seleccionados, nuevo]);
    } else {
      quitarColaborador(nuevo);
    }
  };

  const quitarColaborador = (userToDelete) => {
    const newSeleccionados = seleccionados.filter(
      (user) => user !== userToDelete
    );
    setSeleccionados(newSeleccionados);
  };

  const handleGuardarColaboradores = async () => {
    const data = {
      idpropuesta: parseInt(searchparams.get("idPropuesta")),
      usuarios: seleccionados,
    };
    try {
      await baseApi.post("/propuestas/addColaboradores", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BaseLayout>
      <Content>
        <TituloSeccion>Agregar colaboradores</TituloSeccion>
        <Divider sx={{ mb: 2 }} />
        <SubTituloSeccion>
          <strong>Propuesta:</strong> {propuestaState.nombre}
        </SubTituloSeccion>
        <Typography sx={{ mb: 1 }}>Buscar por:</Typography>
        <ColaboradoresBox
          addColaborador={addColaborador}
          seleccionados={seleccionados}
          quitarColaborador={quitarColaborador}
        />
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Stack spacing={2} direction="row">
          <Button>Atras</Button>
          <Button
            onClick={handleGuardarColaboradores}
            disabled={!seleccionados.length > 0}
            variant="contained"
          >
            Añadir colaboradores
          </Button>
        </Stack>
      </Content>
    </BaseLayout>
  );
};
