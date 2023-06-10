import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useRubros = () => {
  const [rubrosState, setRubrosState] = useState([]);

  const fetchRubros = async () => {
    try {
      const { data } = await baseApi.get("/rubros");
      setRubrosState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRubros();
  }, []);

  return {
    rubrosState,
  };
};
