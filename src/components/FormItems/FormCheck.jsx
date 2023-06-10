import { Checkbox, FormControlLabel } from "@mui/material";

export const FormCheck = ({ label }) => {
  return <FormControlLabel control={<Checkbox />} label={label} />;
};
