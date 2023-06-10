import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useGetUsuarios = () => {
  const [dataUsuarios, setDataUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    try {
      const { data } = await baseApi.get("/colaborador");
      setDataUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return {
    dataUsuarios,
  };
};
