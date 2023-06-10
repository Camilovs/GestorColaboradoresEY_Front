import BaseLayout from "../components/BaseLayout/BaseLayout";
import { Content } from "../components/BaseLayout/Content";
import { FormNuevaPropuesta } from "../components/FormNuevaPropuesta/FormNuevaPropuesta";

export const NuevaPropuestaPage = () => {
  return (
    <BaseLayout>
      <Content>
        <FormNuevaPropuesta />
      </Content>
    </BaseLayout>
  );
};
