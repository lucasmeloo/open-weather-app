import React from 'react';

import { StyledTemperatureDisplay } from './styles/TemperatureDisplay.styled';

interface WeatherData {
  temp: number;
  weatherIcon: string;
  type: string;
}
export default function TemperatureDisplay({
  temp,
  weatherIcon,
  type = 'Fº',
}: WeatherData) {
  return (
    <StyledTemperatureDisplay>
      <h1>{`${temp} ${type}`}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt='weather icon'
      />
    </StyledTemperatureDisplay>
  );
}
