import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PerfilPage } from "../pages/PerfilPage";
import { BusquedaPage } from "../pages/BusquedaPage";
import { NuevaPropuestaPage } from "../pages/NuevaPropuestaPage";
import { CrearPerfilPage } from "../pages/CrearPerfilPage";
import { AddColaboradorPage } from "../pages/AddColaboradorPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/perfil" element={<PerfilPage />}></Route>
        <Route path="/busqueda" element={<BusquedaPage />}></Route>
        <Route path="/nuevapropuesta" element={<NuevaPropuestaPage />}></Route>
        <Route path="/crearperfil" element={<CrearPerfilPage />}></Route>
        <Route path="/addcolaborador" element={<AddColaboradorPage />}></Route>
      </Routes>
    </>
  );
};
