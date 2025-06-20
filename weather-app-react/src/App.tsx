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
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #e8eaf6 50%, #f3e5f5 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 space-y-8">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Weather App
            </h1>
            <p className="text-xl text-gray-600">
              Get current weather and forecasts for any city
            </p>
          </div>
          
          <div className="max-w-lg mx-auto px-4">
            <LocationSearch 
              onLocationSearch={handleLocationSearch}
              loading={loading}
              error={error}
              currentCity={currentCity}
            />
          </div>

          <div className="px-4">
            <DateTime />
          </div>
        </div>

        {/* Main Content */}
        {weatherData ? (
          <div className="space-y-10 px-4">
            <CurrentWeather weatherData={weatherData} />
            <FutureForecast dailyForecasts={weatherData.daily} />
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-32 px-4">
            <p className="text-red-600 text-xl">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
