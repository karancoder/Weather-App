export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
  id: number;
}

export interface CurrentWeather {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherCondition[];
}

export interface DailyForecast {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: WeatherCondition[];
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyForecast[];
  cityName: string;
}

export interface LocationData {
  lat: number;
  lon: number;
  name: string;
  country: string;
}