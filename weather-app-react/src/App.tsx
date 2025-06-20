import { useState, useEffect, useCallback } from 'react'
import type { WeatherData } from './types/weather'
import { getWeatherData } from './services/weatherApi'
import LocationSearch from './components/LocationSearch'
import DateTime from './components/DateTime'
import CurrentWeather from './components/CurrentWeather'
import FutureForecast from './components/FutureForecast'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [currentCity, setCurrentCity] = useState<string>('London')
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Weather App
            </h1>
            <p className="text-gray-600">
              Get current weather and forecasts for any city
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <LocationSearch 
              onLocationSearch={handleLocationSearch}
              loading={loading}
              error={error}
              currentCity={currentCity}
            />
          </div>

          <DateTime />
        </div>

        {/* Main Content */}
        {weatherData ? (
          <div className="space-y-8">
            <CurrentWeather weatherData={weatherData} />
            <FutureForecast dailyForecasts={weatherData.daily} />
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
