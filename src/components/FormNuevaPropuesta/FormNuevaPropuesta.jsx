import { Box, Divider, Grid, Typography } from "@mui/material";
import { ConceptosSelect } from "../FormItems/ConceptosSelect";
import { CrearButton } from "../FormItems/CrearButton";
import { FormSelect } from "../FormItems/FormSelect";
import { FormSwitch } from "../FormItems/FormSwitch";
import { FormInput } from "../FormItems/FormInput";
import { useForm } from "../../hooks/useForm";
import { useRubros } from "../../hooks/useRubros";
import { TituloSeccion } from "../Typograhpy/TituloSeccion";
import { useGetConocimientos } from "../../hooks/useGetConocimientos";
import lineaServicio from "../../api/lineaServicio.json";
import areas from "../../api/areas.json";

const camposPropuesta = {
  nombre: "",
  cliente: "",
  linea_servicio: "",
  area: "",
  ID_Rubro: "",
  privada: false,
  conceptos: [],
};

export const FormNuevaPropuesta = () => {
  const {
    formState,
    nombre,
    cliente,
    linea_servicio,
    area,
    conceptos,
    ID_Rubro,
    privada,
    onInputChange,
    onAddElementSelectChange,
    onCheckedChange,
  } = useForm(camposPropuesta);

  const { rubrosState } = useRubros();
  const { dataConocimientos } = useGetConocimientos();

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <TituloSeccion>Creación de nueva propuesta</TituloSeccion>

        <Divider />
        <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
          Parámetros generales
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormInput
              name={"nombre"}
              label={"Título"}
              value={nombre}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              value={cliente}
              onChange={onInputChange}
              name={"cliente"}
              label={"Cliente"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={linea_servicio}
              onChange={onInputChange}
              name={"linea_servicio"}
              items={lineaServicio}
              label={"Linea de Servicio"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={area}
              onChange={onInputChange}
              name={"area"}
              items={areas}
              label={"Area"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={ID_Rubro}
              onChange={onInputChange}
              name={"ID_Rubro"}
              items={rubrosState || []}
              label={"Area de negocio"}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
              Conceptos utilizados en esta propuesta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ConceptosSelect
              items={dataConocimientos}
              value={conceptos}
              onChange={onAddElementSelectChange}
              name={"conceptos"}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitch
              name={"privada"}
              value={privada}
              onChange={onCheckedChange}
              label={
                "Esta propuesta puede ser compartida y no contiene información privada"
              }
            />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 2, mt: 2 }} />
        <CrearButton form={formState} />
      </Box>
    </>
  );
};
