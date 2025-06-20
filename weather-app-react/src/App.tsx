import { useState, useEffect, useCallback } from 'react'
import type { WeatherData } from './types/weather'
import { getWeatherData } from './services/weatherApi'
import LocationSearch from './components/LocationSearch'
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
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            WeatherNow
          </h1>
          <p className="text-xl text-white/80">
            Beautiful weather forecasts for anywhere in the world
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <LocationSearch 
            onLocationSearch={handleLocationSearch}
            loading={loading}
            error={error}
            currentCity={currentCity}
          />
        </div>

        {/* Main Content */}
        {weatherData ? (
          <div className="space-y-8">
            <CurrentWeather weatherData={weatherData} />
            <FutureForecast dailyForecasts={weatherData.daily} />
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
          </div>
        ) : error ? (
          <div className="text-center py-32 px-4">
            <p className="text-white text-xl">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
