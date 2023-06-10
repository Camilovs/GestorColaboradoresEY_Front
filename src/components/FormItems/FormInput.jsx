import { TextField } from "@mui/material";

export const FormInput = ({
  label,
  name,
  value,
  onChange,
  required = true,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      label={label}
      fullWidth
    />
  );
};
