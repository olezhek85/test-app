import axios from '@/api/api';

export type WeatherData = {
  current: {
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    feelslike_f: number;
  };
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
};

export const fetchCurrentWeather = async () => {
  try {
    const { data } = await axios.get<WeatherData>(
      'https://api.weatherapi.com/v1/current.json?key=cf5294c8ba4d49d68b4142158231404&q=London&aqi=no'
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
