import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import CitySelect from './components/CitySelect';
import Header from './components/Header';
import { StyledContainer } from './components/styles/Container.styled';
import SunriseSunsetFooter from './components/SunriseSunsetFooter';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureUnitSwitch from './components/TemperatureUnitSwitch';
import {
  convertToCelsius,
  convertToFahrenheit,
  getTimeByTimezone,
} from './utils';

interface CityData {
  city: string;
  icon: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  temp: number;
}

function App() {
  const [cityTemperature, setCityTemperature] = useState<number>(0);
  const [cityTemperatureConverted, setCityTemperatureConverted] =
    useState<number>();
  const [temperatureUnitToggle, setTemperatureUnitToggle] =
    useState<boolean>(true);
  const [sunrise, setSunrise] = useState<string>();
  const [sunset, setSunset] = useState<string>();
  const [weatherIcon, setWeatherIcon] = useState<string>();

  useEffect(() => {
    const temperatureConverted = temperatureUnitToggle
      ? convertToFahrenheit(cityTemperature)
      : convertToCelsius(cityTemperature);
    setCityTemperatureConverted(temperatureConverted);
  }, [cityTemperature, temperatureUnitToggle, cityTemperatureConverted]);

  const getCityData = (data: CityData) => {
    setSunrise(getTimeByTimezone(data.sunrise, data.timezone));
    setSunset(getTimeByTimezone(data.sunset, data.timezone));
    setWeatherIcon(data.icon);
    setCityTemperature(data.temp);
  };

  const setTemperatureByUnit = (temperatureUnitToggle: boolean) => {
    setTemperatureUnitToggle(temperatureUnitToggle);
  };

  return (
    <StyledContainer>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitySelect getCityData={getCityData} />
        </Grid>
        <Grid item xs={6}>
          <TemperatureUnitSwitch
            convertTemperatureUnit={setTemperatureByUnit}
          />
        </Grid>
        <Grid item xs={12}>
          {cityTemperatureConverted && weatherIcon && (
            <TemperatureDisplay
              temp={cityTemperatureConverted}
              type={temperatureUnitToggle ? 'ºF' : 'ºC'}
              weatherIcon={weatherIcon}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {sunrise && sunset && (
            <SunriseSunsetFooter sunrise={sunrise} sunset={sunset} />
          )}
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default App;
