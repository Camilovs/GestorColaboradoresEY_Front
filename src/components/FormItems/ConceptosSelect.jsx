import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

export const ConceptosSelect = ({ items, name, value = [], onChange }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Seleccionar conceptos</InputLabel>
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
