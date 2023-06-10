import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// {
//   ID,
//   nombre
// }
export const FormSelect = ({ items, label, name, onChange, value }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="formSelectid">{label}</InputLabel>
      <Select onChange={onChange} value={value} name={name}>
        {items.map((item, i) => (
          <MenuItem key={i} value={item.ID}>
            {item.nombre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
