import { Button, Grid } from "@mui/material";
import { FormInput } from "../FormItems/FormInput";
import { ConceptosSelect } from "../FormItems/ConceptosSelect";
import { ExperienciaSelect } from "../FormItems/ExperienciaSelect";
import SearchIcon from "@mui/icons-material/Search";
import { useRubros } from "../../hooks/useRubros";
import { useGetConocimientos } from "../../hooks/useGetConocimientos";
import { useForm } from "../../hooks/useForm";

const camposFiltros = {
  nombre: "",
  apellido: "",
  conceptos: [],
  experiencia: [],
};

export const FiltrosColaborador = ({ setData }) => {
  const { formState, onInputChange, onAddElementSelectChange } =
    useForm(camposFiltros);

  const { rubrosState } = useRubros();
  const { dataConocimientos } = useGetConocimientos();

  const handleSearch = () => {
    setData(formState);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={2} item>
          <FormInput
            required={false}
            name={"nombre"}
            value={formState.nombre}
            onChange={onInputChange}
            label={"Nombre"}
          />
        </Grid>
        <Grid xs={2} item>
          <FormInput
            required={false}
            name={"apellido"}
            value={formState.apellido}
            onChange={onInputChange}
            label={"Apellido"}
          />
        </Grid>
        <Grid xs={4} item>
          <ConceptosSelect
            items={dataConocimientos}
            value={formState.conceptos}
            onChange={onAddElementSelectChange}
            name={"conceptos"}
          />
        </Grid>
        <Grid xs={4} item>
          <ExperienciaSelect
            items={rubrosState}
            name={"experiencia"}
            value={formState.experiencia}
            onChange={onAddElementSelectChange}
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleSearch}
        variant="outlined"
        sx={{ mt: 1 }}
        startIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </>
  );
};
