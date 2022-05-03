import React from 'react';

import { StyledSunriseSunsetFooter } from './styles/SunriseSunsetFooter.styled';

interface sunsetSunriseTime {
  sunrise: string;
  sunset: string;
}

export default function SunriseSunsetFooter({
  sunrise,
  sunset,
}: sunsetSunriseTime) {
  return (
    <StyledSunriseSunsetFooter>
      <h4>{`Sunrise: ${sunrise}`}</h4>
      <h4>{`Sunset: ${sunset}`}</h4>
    </StyledSunriseSunsetFooter>
  );
}
