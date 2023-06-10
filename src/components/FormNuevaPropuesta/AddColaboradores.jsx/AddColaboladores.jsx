import { Box, Grid, Typography } from "@mui/material";
import { CardColaborador } from "./CardColaborador";

const Colaboradores = [
  {
    nombre: "Colaborador 1",
    rol: "Asistente/Staff",
    aptitudes: ["React", "Azure", "R", "Python"],
  },
  {
    nombre: "Colaborador 2",
    rol: "Asistente/Staff",
    aptitudes: ["Full Stack", "Node", "JavaScript", "Python"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
  {
    nombre: "Colaborador 3",
    rol: "Senior",
    aptitudes: ["Data Factory", "Bid Data", "Data Sciencie"],
  },
];

export const AddColaboladores = () => {
  return (
    <>
      <Typography sx={{ mb: 1, mt: 2 }} variant="subtitle1">
        Agregar colaboradores
      </Typography>
      <Box
        sx={{
          height: "400px",
          overflow: "auto",
          backgroundColor: "#f5f5f5",
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          {Colaboradores.map((colaborador, i) => {
            return (
              <Grid item xs={6} key={i}>
                <CardColaborador data={colaborador} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
