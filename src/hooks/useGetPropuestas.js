import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useGetPropuestas = () => {
  const [propuestasState, setPropuestasState] = useState([]);

  const fetchRubros = async () => {
    try {
      const { data } = await baseApi.get("/propuestas");
      setPropuestasState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRubros();
  }, []);

  return {
    propuestasState,
  };
};
