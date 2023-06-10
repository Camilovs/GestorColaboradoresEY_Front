import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { GeneralInfo } from "./GeneralInfo";
import { SubTituloSeccion } from "../Typograhpy/SubTituloSeccion";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import baseApi from "../../api/baseApi";
import { TituloSeccion } from "../Typograhpy/TituloSeccion";
import { ColaboradorItem } from "./ColaboradorItem";
import conocimiento from "../../api/conocimiento.json";

export const InfoPropuesta = ({ id = "" }) => {
  const [dataPropuesta, setDataPropuesta] = useState({});
  const navigate = useNavigate();

  const fetchPropuesta = async () => {
    try {
      const { data } = await baseApi.get(`/propuestas/${id}`);
      setDataPropuesta(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPropuesta();
  }, [id]);

  return (
    <>
      <TituloSeccion>{dataPropuesta.nombre}</TituloSeccion>
      <Divider />
      <Grid container sx={{ mt: 1 }} spacing={2}>
        <Grid item xs={6}>
          <SubTituloSeccion>Datos generales</SubTituloSeccion>
          <GeneralInfo data={dataPropuesta} />
          <Typography sx={{ mb: 2, mt: 3 }}>Conceptos</Typography>
          <Grid container spacing={0.5}>
            {dataPropuesta.conceptos?.map((item, i) => (
              <Grid item key={i}>
                <Chip
                  // size="small"
                  color="primary"
                  // variant="outlined"
                  sx={{ fontSize: "14px", fontWeight: "500" }}
                  label={
                    conocimiento.find(
                      (itemFuente) => itemFuente.ID === item.ID_Item
                    )?.nombre
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <SubTituloSeccion>Colaboradores</SubTituloSeccion>
          {dataPropuesta?.colaboradores?.map((user, i) => (
            <Fragment key={i}>
              <ColaboradorItem user={user} />
            </Fragment>
          ))}
          <Button
            onClick={() =>
              navigate({
                pathname: "/addcolaborador",
                search: createSearchParams({
                  idPropuesta: id,
                }).toString(),
              })
            }
            sx={{ mt: 1 }}
            startIcon={<AddIcon />}
          >
            {" "}
            Añadir
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
