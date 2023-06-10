import { Grid, Typography } from "@mui/material";
import { SliderNivel } from "./SliderNivel";
import { Fragment } from "react";

export const NivelConocimiento = ({
  items = [],
  nameArray,
  onChange,
  data,
}) => {
  const itemsFormated = [];
  items.forEach((item) => itemsFormated.push({ nombre: item, value: 0 }));

  const onChangeLvlSlider = ({ target }) => {
    const { name, value } = target;

    const indexNivel = data.findIndex((nivel) => nivel.nombre === name);
    let newLvlObject = [];
    if (indexNivel !== -1) {
      data[indexNivel] = { nombre: name, nivel: value };
      newLvlObject = data;
    } else {
      data.push({ nombre: name, nivel: value });
      newLvlObject = data;
    }
    onChange(nameArray, newLvlObject);
  };

  return (
    <>
      {itemsFormated.length > 0 && (
        <>
          <Typography sx={{ fontStyle: "italic" }}>
            Ajuste su nivel de conocimiento
          </Typography>
          <Grid container>
            <Grid xs={4} item></Grid>
            <Grid xs={7} item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography sx={{ fontStyle: "italic" }}>Novato</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontStyle: "italic" }}>Experto</Typography>
                </Grid>
              </Grid>
            </Grid>
            {itemsFormated.map((item, i) => {
              return (
                <Fragment key={i}>
                  <Grid xs={4} item>
                    <Typography>{item.nombre}</Typography>
                  </Grid>
                  <Grid xs={7} item sx={{ pl: 2 }}>
                    <SliderNivel
                      onChange={onChangeLvlSlider}
                      name={item.nombre}
                      nivel={item.nivel}
                    />
                  </Grid>
                </Fragment>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};
