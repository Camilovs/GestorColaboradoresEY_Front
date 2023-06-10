import styled from "styled-components";
import lineaServicio from "../../api/lineaServicio.json";
import areas from "../../api/areas.json";
import sectores from "../../api/sectores.json";

const InfoBox = styled.div`
  padding: 10px;
  padding-left: 15px;
  border: 1px solid #e8e8e8;
`;
export const GeneralInfo = ({ data = {} }) => {
  const findDataByID = (array, id) => {
    return array.find((item) => item.ID == id)?.nombre;
  };
  return (
    <>
      <InfoBox>
        <strong>Cliente: </strong>
        {data.cliente}
      </InfoBox>
      <InfoBox>
        <strong>Linea de Servicio: </strong>
        {findDataByID(lineaServicio, data.linea_servicio)}
      </InfoBox>
      <InfoBox>
        <strong>Fecha de creación: </strong>
        {data.createdAt}
      </InfoBox>
      <InfoBox>
        <strong>Area: </strong>
        {findDataByID(areas, data.area)}
      </InfoBox>
      <InfoBox>
        <strong>Area de Negocio: </strong>
        {findDataByID(sectores, data.ID_Rubro)}
      </InfoBox>
    </>
  );
};
