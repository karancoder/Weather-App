import type { WeatherData, LocationData } from '../types/weather';
import { API_KEY } from '../utils/constants';

export async function getLatiLongFromCityName(cityName: string): Promise<{ latitude: number; longitude: number }> {
  const apiGeocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
  
  try {
    const res = await fetch(apiGeocodingUrl);
    const data: LocationData[] = await res.json();
    
    if (data.length === 0) {
      throw new Error("City not found!");
    }
    
    return {
      latitude: data[0].lat,
      longitude: data[0].lon,
    };
  } catch (err) {
    throw new Error("Failed to fetch location data");
  }
}

export async function getWeatherData(cityName: string): Promise<WeatherData> {
  try {
    const { latitude, longitude } = await getLatiLongFromCityName(cityName);
    const apiOneCallWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    
    const res = await fetch(apiOneCallWeatherUrl);
    
    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }
    
    const data: WeatherData = await res.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Failed to fetch weather data");
  }
}