import React, { useState, useEffect, createContext } from 'react';

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
interface CityWeatherData {
  cityTemperatureConverted: number | undefined;
  sunrise: string | undefined;
  sunset: string | undefined;
  temperatureUnitToggle: boolean;
  weatherIcon: string | undefined;
}
export const CityWeatherContext = createContext<CityWeatherData>(null!);

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
  }, [cityTemperature, temperatureUnitToggle]);

  const setCityData = (data: CityData) => {
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
      <CityWeatherContext.Provider
        value={{
          cityTemperatureConverted,
          temperatureUnitToggle,
          weatherIcon,
          sunrise,
          sunset,
        }}
      >
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CitySelect setCityData={setCityData} />
          </Grid>
          <Grid item xs={6}>
            <TemperatureUnitSwitch
              convertTemperatureUnit={setTemperatureByUnit}
            />
          </Grid>
          <Grid item xs={12}>
            {cityTemperatureConverted && weatherIcon && <TemperatureDisplay />}
          </Grid>
          <Grid item xs={12}>
            {sunrise && sunset && <SunriseSunsetFooter />}
          </Grid>
        </Grid>
      </CityWeatherContext.Provider>
    </StyledContainer>
  );
}

export default App;
