import React, { useEffect, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StyledCitySelect } from './styles/CitySelect.styled';
import { setStoredData, getStoredData } from '../utils';

interface CityData {
  city: string;
  icon: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  temp: number;
}
interface SetCityData {
  setCityData: (data: CityData) => void;
}

const cities = [
  'Alaska',
  'Recife',
  'Lisbon',
  'Rio de Janeiro',
  'Coimbra',
  'New York',
  'Vancouver',
  'Porto Alegre',
  'Sapucaia do Sul',
  'Tokyo',
].sort();

export default function CitySelect({ setCityData }: SetCityData) {
  const [city, setCity] = useState(cities[0]);
  const handleChange = async (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  useEffect(() => {
    const data = getStoredData(city);
    if (data) {
      setCityData({
        city,
        sunset: data.sunset,
        sunrise: data.sunrise,
        timezone: data.timezone,
        icon: data.icon,
        temp: data.temp,
      });
    } else {
      fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`,
      )
        .then((res) => res.json())
        .then((result) => {
          const finalResult = {
            city,
            sunset: result.sys.sunset,
            sunrise: result.sys.sunrise,
            timezone: result.timezone,
            icon: result.weather[0].icon,
            temp: result.main.temp,
          };
          setStoredData(finalResult);
          setCityData(finalResult);
        });
    }
  }, [city, setCityData]);

  return (
    <StyledCitySelect>
      <FormControl fullWidth>
        <Select value={city} onChange={handleChange}>
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledCitySelect>
  );
}
