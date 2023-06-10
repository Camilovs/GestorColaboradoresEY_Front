import { Slider } from "@mui/material";

export const SliderNivel = ({ nivel, name, onChange }) => {
  function valuetext(value) {
    return `${value}`;
  }

  return (
    <Slider
      name={name}
      onChange={onChange}
      defaultValue={nivel}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={0}
      max={10}
    />
  );
};
