import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
const Items = [
  {
    label: "Inicio",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    label: "Crear propuesta",
    icon: <BusinessCenterIcon />,
    route: "/nuevapropuesta",
  },
  {
    label: "Crear Perfil",
    icon: <PeopleIcon />,
    route: "/crearperfil",
  },
  {
    label: "Búsqueda",
    icon: <SearchIcon />,
    route: "/busqueda",
  },
];

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      {Items.map((item, i) => (
        <ListItemButton key={i} onClick={() => navigate(item.route)}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </>
  );
};
