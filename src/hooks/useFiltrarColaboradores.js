import { useEffect, useState } from "react";
import sectores from "../api/sectores.json";
import conocimiento from "../api/conocimiento.json";

export const useFiltrarColaboradores = (inicialData, filtros, setNoData) => {
  const [dataFiltrada, setDataFiltrada] = useState(inicialData);

  const getIdsFiltro = (fuente, filtro) => {
    return filtro.reduce((returnarray, item) => {
      returnarray.push(
        fuente.find((itemFuente) => itemFuente.nombre === item)?.ID || ""
      );
      return returnarray;
    }, []);
  };
  const filtrar = (data, filtros) => {
    let dataFiltrada = data;

    //Filtrar nombre y apellido
    if (filtros.nombre !== "") {
      dataFiltrada = dataFiltrada.filter((user) =>
        user?.nombre?.toLowerCase().includes(filtros.nombre?.toLowerCase())
      );
    }
    if (filtros.apellido !== "") {
      dataFiltrada = dataFiltrada.filter((user) =>
        user?.apellido?.toLowerCase().includes(filtros.apellido?.toLowerCase())
      );
    }

    // Filtrar experiencia
    if (filtros.experiencia?.length > 0) {
      dataFiltrada = dataFiltrada.filter((user) => {
        const idRubrosFiltro = getIdsFiltro(sectores, filtros.experiencia);
        if (
          user.experiencias.find((item) =>
            idRubrosFiltro.includes(item.ID_Rubro)
          )
        ) {
          return true;
        }
      });
    }
    // Filtrar conocimiento
    if (filtros.conceptos?.length > 0) {
      dataFiltrada = dataFiltrada.filter((user) => {
        const idConocimientoFiltro = getIdsFiltro(
          conocimiento,
          filtros.conceptos
        );
        if (
          user.conocimiento.find((item) =>
            idConocimientoFiltro.includes(item.ID_Item)
          )
        ) {
          return true;
        }
      });
    }

    setNoData(dataFiltrada.length === 0);
    setDataFiltrada(dataFiltrada);
  };

  useEffect(() => {
    setDataFiltrada(inicialData);
  }, [inicialData]);

  useEffect(() => {
    filtrar(inicialData, filtros);
  }, [filtros, inicialData]);

  return {
    dataFiltrada,
  };
};
