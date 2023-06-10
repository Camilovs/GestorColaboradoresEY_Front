import { FormControlLabel, Switch } from "@mui/material";

export const FormSwitch = ({ label, name, value, onChange }) => {
  return (
    <FormControlLabel
      checked={value}
      onChange={onChange}
      name={name}
      control={<Switch />}
      label={label}
    />
  );
};
