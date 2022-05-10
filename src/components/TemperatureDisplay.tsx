import React, { useContext } from 'react';

import { StyledTemperatureDisplay } from './styles/TemperatureDisplay.styled';
import { CitiesWeatherContext } from './CitySelect';

interface WeatherData {
  temp: number;
  weatherIcon: string;
  type: string;
}
export default function TemperatureDisplay() {
  const melo = useContext(CitiesWeatherContext);
  console.log('melo', melo);
  return (
    <StyledTemperatureDisplay>
      {/* <h1>{`${temp} ${type}`}</h1> */}
      <h1>LUCAS</h1>
      {/* <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt='weather icon'
      /> */}
    </StyledTemperatureDisplay>
  );
}
