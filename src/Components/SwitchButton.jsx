import React, { useState } from "react";
import Switch from "react-switch";

const SwitchButton = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <label>
      <span>Switch with default style</span>
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
};

export default SwitchButton;
