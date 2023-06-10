import { TextField } from "@mui/material";

export const FormTextArea = ({ label, name, value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      name={name}
      fullWidth
      label={label}
      multiline
      rows={4}
    />
  );
};
