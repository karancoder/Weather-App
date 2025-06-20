import { useState, useEffect, useCallback } from 'react'
import type { WeatherData } from './types/weather'
import { getWeatherData } from './services/weatherApi'
import LocationSearch from './components/LocationSearch'
import DateTime from './components/DateTime'
import CurrentWeather from './components/CurrentWeather'
import FutureForecast from './components/FutureForecast'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [currentCity, setCurrentCity] = useState<string>('Maldives')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleLocationSearch = useCallback(async (cityName: string) => {
    if (!cityName.trim()) return

    setLoading(true)
    setError('')
    
    try {
      const data = await getWeatherData(cityName)
      setWeatherData(data)
      setCurrentCity(cityName)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // Load initial weather data
    handleLocationSearch(currentCity)
  }, [handleLocationSearch, currentCity])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-600 to-purple-600 font-roboto font-light overflow-hidden">
      <div className="min-h-screen bg-black bg-opacity-20 text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="w-full max-w-md mb-8">
            <LocationSearch 
              onLocationSearch={handleLocationSearch}
              loading={loading}
              error={error}
              currentCity={currentCity}
            />
            <DateTime />
          </div>
          
          {weatherData && (
            <div className="w-full max-w-6xl">
              <CurrentWeather weatherData={weatherData} />
            </div>
          )}
        </div>
        
        {weatherData && (
          <div className="w-full">
            <FutureForecast dailyForecasts={weatherData.daily} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
