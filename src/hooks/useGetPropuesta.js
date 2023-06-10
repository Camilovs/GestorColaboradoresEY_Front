import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useGetPropuesta = ({ id = "" }) => {
  const [propuestaState, setPropuestaState] = useState({});
  const fetchPropuesta = async () => {
    try {
      const { data } = await baseApi.get(`/propuestas/${id}`);
      setPropuestaState(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPropuesta();
  }, [id]);

  return {
    propuestaState,
  };
};
