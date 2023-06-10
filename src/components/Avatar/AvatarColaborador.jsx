import { Avatar } from "@mui/material";

export const AvatarColaborador = ({ nombre, apellido, width, height }) => {
  return (
    <Avatar sx={{ top: "50%", mt: `-${width / 2}`, ml: 2, width, height }}>
      {nombre.charAt(0)}
      {apellido.charAt(0)}
    </Avatar>
  );
};
