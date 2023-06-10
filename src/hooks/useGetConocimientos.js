import { useEffect, useState } from "react";
import baseApi from "../api/baseApi";

export const useGetConocimientos = () => {
  const [dataConocimientos, setDataConocimientos] = useState([]);

  const fetchConocimientos = async () => {
    try {
      const { data } = await baseApi.get("/conocimientos");
      setDataConocimientos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConocimientos();
  }, []);

  return {
    dataConocimientos,
  };
};
