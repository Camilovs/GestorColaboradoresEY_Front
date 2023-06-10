import { Grid, LinearProgress, Typography } from "@mui/material";
import { Fragment } from "react";
import conocimiento from "../../../api/conocimiento.json";
export const NivelConocimientos = ({ items = [] }) => {
  return (
    <Grid container alignItems={"center"} sx={{ mb: 2, mt: 1 }}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <Grid xs={4} item>
            <Typography sx={{ fontSize: "12px" }}>
              {
                conocimiento.find((itemApi) => itemApi.ID === item.ID_Item)
                  ?.nombre
              }
            </Typography>
          </Grid>
          <Grid xs={6} item>
            <LinearProgress
              sx={{ height: 6 }}
              variant="determinate"
              value={parseInt(item.nivel) * 10}
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
