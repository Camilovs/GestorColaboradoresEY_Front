import { Button } from "@mui/material";
import baseApi from "../../api/baseApi";

export const CrearButton = ({ form }) => {
  const handleSubmit = async () => {
    try {
      await baseApi.post("/propuestas", form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={handleSubmit} variant="contained">
      Crear Propuesta
    </Button>
  );
};
