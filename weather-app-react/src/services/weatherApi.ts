import type { WeatherData, LocationData } from '../types/weather';
import { API_KEY } from '../utils/constants';

export async function getLatiLongFromCityName(cityName: string): Promise<{ latitude: number; longitude: number }> {
  const apiGeocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
  
  try {
    const res = await fetch(apiGeocodingUrl);
    
    if (!res.ok) {
      throw new Error("Failed to fetch location data");
    }
    
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
    
    // Use free Current Weather API instead of deprecated One Call API
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastUrl)
    ]);
    
    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error("Failed to fetch weather data");
    }
    
    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();
    
    // Transform the data to match our WeatherData interface
    const transformedData: WeatherData = {
      current: {
        temp: currentData.main.temp,
        feels_like: currentData.main.feels_like,
        humidity: currentData.main.humidity,
        pressure: currentData.main.pressure,
        wind_speed: currentData.wind.speed,
        wind_deg: currentData.wind.deg || 0,
        weather: [{
          main: currentData.weather[0].main,
          description: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          id: currentData.weather[0].id
        }]
      },
      daily: transformForecastToDaily(forecastData.list),
      cityName: currentData.name
    };
    
    return transformedData;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Failed to fetch weather data");
  }
}

function transformForecastToDaily(forecastList: any[]): any[] {
  // Group forecast data by day and take one entry per day
  const dailyMap = new Map();
  
  forecastList.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();
    
    if (!dailyMap.has(dayKey)) {
      dailyMap.set(dayKey, {
        dt: item.dt,
        temp: {
          min: item.main.temp_min,
          max: item.main.temp_max,
        },
        weather: [{
          main: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          id: item.weather[0].id
        }]
      });
    } else {
      // Update min/max temperatures
      const existing = dailyMap.get(dayKey);
      existing.temp.min = Math.min(existing.temp.min, item.main.temp_min);
      existing.temp.max = Math.max(existing.temp.max, item.main.temp_max);
    }
  });
  
  return Array.from(dailyMap.values()).slice(0, 7); // Return up to 7 days
}