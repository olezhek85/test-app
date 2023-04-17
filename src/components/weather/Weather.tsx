import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { WeatherDetailsRow } from './components/WeatherDetailsRow';
import { fetchCurrentWeather, WeatherData } from '@/api/weatherApi';

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetchCurrentWeather();
      setWeather(response);
    };
    fetchWeather();
  }, []);

  return (
    <Paper elevation={3} sx={{ width: 300, padding: 1.25, marginTop: 2.5 }}>
      {weather?.location && weather?.current && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
              {weather.location.name}, {weather.location.country}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
              {weather.current.condition.text}
            </Typography>
          </Box>
          <img
            alt={weather.current.condition.text}
            src={weather.current.condition.icon}
          />
        </Box>
      )}

      {weather?.current && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 80,
              letterSpacing: -5,
            }}
          >
            {Math.round(weather.current.temp_f)}°F
          </Typography>
          <Box sx={{ width: '100%', paddingLeft: 2.5 }}>
            <WeatherDetailsRow label='Feels like'>
              {Math.round(weather.current.feelslike_f)}°F
            </WeatherDetailsRow>

            <WeatherDetailsRow label='Wind'>
              {Math.round(weather.current.wind_kph / 3.6)} m/s
            </WeatherDetailsRow>

            <WeatherDetailsRow label='Humidity'>
              {Math.round(weather.current.humidity)}%
            </WeatherDetailsRow>

            <WeatherDetailsRow label='Pressure'>
              {Math.round(weather.current.pressure_mb)} hPa
            </WeatherDetailsRow>
          </Box>
        </Box>
      )}
    </Paper>
  );
};
