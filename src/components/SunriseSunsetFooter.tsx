import React, { useContext } from 'react';

import { CityWeatherContext } from '../App';

import { StyledSunriseSunsetFooter } from './styles/SunriseSunsetFooter.styled';

export default function SunriseSunsetFooter() {
  const weatherData = useContext(CityWeatherContext);
  return (
    <StyledSunriseSunsetFooter>
      <h4>{`Sunrise: ${weatherData.sunrise}`}</h4>
      <h4>{`Sunset: ${weatherData.sunset}`}</h4>
    </StyledSunriseSunsetFooter>
  );
}
