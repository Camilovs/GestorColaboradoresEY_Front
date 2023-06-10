import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

export const ExperienciaSelect = ({ items, name, value = [], onChange }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Seleccionar experiencia</InputLabel>
        <Select
          name={name}
          fullWidth
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {items.map((item) => (
            <MenuItem key={item.ID} value={item.nombre}>
              {item.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
