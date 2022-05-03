import React from 'react';

import Switch from '@mui/material/Switch';

import { StyledTemperatureUnitSwitch } from './styles/TemperatureUnitSwitch.styled';

interface ToggleProps {
  convertTemperatureUnit: (event: boolean) => void;
}

export default function TemperatureUnitSwitch({
  convertTemperatureUnit,
}: ToggleProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    convertTemperatureUnit(event.target.checked);
  };

  return (
    <StyledTemperatureUnitSwitch>
      <p>°C</p>
      <Switch defaultChecked onChange={handleChange} />
      <p>°F</p>
    </StyledTemperatureUnitSwitch>
  );
}
