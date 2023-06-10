import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FormInput } from "../FormItems/FormInput";
import { FormSelect } from "../FormItems/FormSelect";
import { FormSwitch } from "../FormItems/FormSwitch";
import { ConceptosSelect } from "../FormItems/ConceptosSelect";
import { NivelConocimiento } from "./NivelConocimiento/NivelConocimiento";
import { FormTextArea } from "../FormItems/FormTextArea";
import roles from "../../api/roles.json";
import { useForm } from "../../hooks/useForm";
import lineaServicio from "../../api/lineaServicio.json";
import areas from "../../api/areas.json";
import { ExperienciaSelect } from "../FormItems/ExperienciaSelect";
import { useRubros } from "../../hooks/useRubros";
import { TituloSeccion } from "../Typograhpy/TituloSeccion";
import baseApi from "../../api/baseApi";
import { useGetConocimientos } from "../../hooks/useGetConocimientos";

const camposPerfil = {
  nombre: "",
  apellido: "",
  correo: "",
  rol: "",
  linea_servicio: "",
  area: "",
  activo: false,
  conceptos: [],
  lvlconceptos: [],
  experiencia: [],
  canAsk: "",
  canHelp: "",
};

export const FormCrearPerfil = () => {
  const {
    formState,
    onInputChange,
    onAddElementSelectChange,
    onCheckedChange,
    onChangeSlider,
  } = useForm(camposPerfil);

  const { rubrosState } = useRubros();
  const { dataConocimientos } = useGetConocimientos();

  const handleCrearPerfil = async () => {
    //Realizar filtro final de conceptos elegidos y su niveles
    formState.lvlconceptos = formState.lvlconceptos.filter((lvl) =>
      formState.conceptos.includes(lvl.nombre)
    );
    try {
      await baseApi.post("/colaborador", formState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <TituloSeccion>Creación de perfil</TituloSeccion>
        <Divider />
        <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
          Información general
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormInput
              name={"nombre"}
              value={formState.nombre}
              onChange={onInputChange}
              label={"Nombre"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              name={"apellido"}
              value={formState.apellido}
              onChange={onInputChange}
              label={"Apellido"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              name={"correo"}
              value={formState.correo}
              onChange={onInputChange}
              label={"Correo"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={formState.linea_servicio}
              onChange={onInputChange}
              name={"linea_servicio"}
              items={lineaServicio}
              label={"Linea de Servicio"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={formState.area}
              name={"area"}
              onChange={onInputChange}
              items={areas}
              label={"Area"}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              value={formState.rol}
              name={"rol"}
              onChange={onInputChange}
              items={roles}
              label={"Rango"}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitch
              name={"activo"}
              value={formState.activo}
              onChange={onCheckedChange}
              label={"Estoy disponible para participar en propuestas."}
            />
          </Grid>
        </Grid>
        <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
          Experiencia
        </Typography>
        <ExperienciaSelect
          items={rubrosState}
          name={"experiencia"}
          value={formState.experiencia}
          onChange={onAddElementSelectChange}
        />
        <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
          Conocimientos
        </Typography>
        <ConceptosSelect
          items={dataConocimientos}
          value={formState.conceptos}
          onChange={onAddElementSelectChange}
          name={"conceptos"}
        />
        <div style={{ marginTop: "15px" }}></div>
        <NivelConocimiento
          nameArray={"lvlconceptos"}
          items={formState.conceptos}
          data={formState.lvlconceptos}
          onChange={onChangeSlider}
        />
        <Divider sx={{ mb: 2, mt: 2 }} />

        <Grid container spacing={2} sx={{ pt: 3 }}>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1 }} variant="subtitle1">
              Me puedes preguntar por:
            </Typography>
            <FormTextArea
              value={formState.canAsk}
              onChange={onInputChange}
              name={"canAsk"}
            />
            <div style={{ marginBottom: "10px" }}></div>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1 }} variant="subtitle1">
              Puedo ayudar en:
            </Typography>
            <FormTextArea
              value={formState.canHelp}
              onChange={onInputChange}
              name={"canHelp"}
            />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 2, mt: 2 }} />
        <Button onClick={handleCrearPerfil} variant="contained">
          crear perfil
        </Button>
      </Box>
    </>
  );
};
