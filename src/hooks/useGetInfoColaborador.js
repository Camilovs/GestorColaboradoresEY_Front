import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useGetInfoColaborador = (id = "") => {
  const [dataExtraUser, setDataExtraUser] = useState({});
  const fetchDataUser = async () => {
    try {
      const { data } = await baseApi.get(`/colaborador/infoextra/${id}`);
      setDataExtraUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, [id]);

  return {
    dataExtraUser,
  };
};
