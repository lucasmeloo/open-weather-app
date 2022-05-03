export const convertToFahrenheit = (value: number = 0): number => {
  return Math.round(value * 1.8 + 32);
};

export const convertToCelsius = (value: number = 0): number => {
  return Math.round((value - 32) * 0.55);
};

export const getTimeByTimezone = (
  timestamp: number = 0,
  timezone: number = 0,
) => {
  let time = (timestamp + timezone + 10800) * 1000;

  return new Date(time).toLocaleTimeString(navigator.language, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour: '2-digit',
    minute: '2-digit',
  });
};

interface IStoreData {
  city: string;
  sunset?: string;
  sunrise?: string;
  timezone?: number;
  icon?: string;
  temp?: number;
}

export const setStoredData = ({
  city,
  sunset,
  sunrise,
  timezone,
  icon,
  temp,
}: IStoreData) => {
  const storage = JSON.parse(localStorage.getItem('app-weather') ?? `{}`);
  const result = {
    ...storage,
    [city]: { sunset, sunrise, timezone, icon, temp },
  };
  localStorage.setItem(`app-weather`, JSON.stringify(result));
};

export const getStoredData = (city: string = '') => {
  const storage = JSON.parse(localStorage.getItem('app-weather') ?? `{}`);
  return storage?.[city] ?? null;
};
