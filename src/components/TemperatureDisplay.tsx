import React, { useContext } from 'react';

import { StyledTemperatureDisplay } from './styles/TemperatureDisplay.styled';
import { CityWeatherContext } from '../App';

export default function TemperatureDisplay() {
  const weatherData = useContext(CityWeatherContext);

  return (
    <StyledTemperatureDisplay>
      <h1>
        {`${weatherData.cityTemperatureConverted}`}
        {weatherData.temperatureUnitToggle ? '°F' : '°C'}
      </h1>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
        alt='weather icon'
      />
    </StyledTemperatureDisplay>
  );
}
