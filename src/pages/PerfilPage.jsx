import { Button } from "@mui/material";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import { useNavigate } from "react-router-dom";
import { Content } from "../components/BaseLayout/Content";

export const PerfilPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <Content>
        <Button onClick={() => navigate("/crearperfil")}>Crear perfil</Button>
      </Content>
    </BaseLayout>
  );
};
