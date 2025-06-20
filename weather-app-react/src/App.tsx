import { useState, useEffect } from 'react'
import type { WeatherData } from './types/weather'
import { getWeatherData } from './services/weatherApi'
import { getBackgroundImageUrl } from './utils/helpers'
import LocationSearch from './components/LocationSearch'
import DateTime from './components/DateTime'
import CurrentWeather from './components/CurrentWeather'
import FutureForecast from './components/FutureForecast'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [currentCity, setCurrentCity] = useState<string>('Maldives')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [backgroundImage, setBackgroundImage] = useState<string>('')

  const handleLocationSearch = async (cityName: string) => {
    if (!cityName.trim()) return

    setLoading(true)
    setError('')
    
    try {
      const data = await getWeatherData(cityName)
      setWeatherData(data)
      setCurrentCity(cityName)
      updateBackgroundImage(cityName)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const updateBackgroundImage = (cityName: string) => {
    const isMobile = window.innerWidth <= 768
    const imageUrl = getBackgroundImageUrl(cityName, isMobile)
    setBackgroundImage(imageUrl)
  }

  useEffect(() => {
    // Load initial weather data
    handleLocationSearch(currentCity)
    
    // Handle window resize for background image
    const handleResize = () => {
      updateBackgroundImage(currentCity)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat font-roboto font-light overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-40 text-white flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="m-4 p-2 flex flex-col items-center">
            <LocationSearch 
              onLocationSearch={handleLocationSearch}
              loading={loading}
              error={error}
              currentCity={currentCity}
            />
            <DateTime />
          </div>
          
          {weatherData && (
            <CurrentWeather weatherData={weatherData} />
          )}
        </div>
        
        {weatherData && (
          <FutureForecast dailyForecasts={weatherData.daily} />
        )}
      </div>
    </div>
  )
}

export default App
