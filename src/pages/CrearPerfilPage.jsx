import BaseLayout from "../components/BaseLayout/BaseLayout";
import { Content } from "../components/BaseLayout/Content";
import { FormCrearPerfil } from "../components/FormCrearPerfil/FormCrearPerfil";

export const CrearPerfilPage = () => {
  return (
    <BaseLayout>
      <Content>
        <FormCrearPerfil />
      </Content>
    </BaseLayout>
  );
};
