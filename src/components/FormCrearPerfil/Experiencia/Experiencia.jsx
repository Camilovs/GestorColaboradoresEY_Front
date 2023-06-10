import { Grid } from "@mui/material";
import { FormCheck } from "../../FormItems/FormCheck";

const areasexp = [
  "Mineria",
  "Retail",
  "Bancaria",
  "Agricola",
  "Industrial",
  "Financiera",
  "Publica",
  "Gobierno",
  "Educacion",
  "Tecnologia",
  "Automotriz",
  "Salud",
];

export const Experiencia = () => {
  return (
    <Grid container>
      {areasexp.map((area, i) => (
        <Grid item key={i}>
          <FormCheck label={area} />
        </Grid>
      ))}
    </Grid>
  );
};
