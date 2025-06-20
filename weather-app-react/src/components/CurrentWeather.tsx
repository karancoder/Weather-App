import { useState, useEffect } from 'react'
import type { WeatherData } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS } from '../utils/constants'
import { convertPressureToMMHg, convertWindDirectionDegreesToCardinals, capitalizeFirstLetter, formatDateTime } from '../utils/helpers'
import { Card, CardContent } from '@/components/ui/card'
import { Clock } from 'lucide-react'

interface CurrentWeatherProps {
  weatherData: WeatherData
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  
  const { current } = weatherData
  const weather = current.weather[0]
  const weatherIcon = OPEN_WEATHER_API_ICONS_TO_WU_ICONS[weather.icon]
  const pressure = convertPressureToMMHg(current.pressure)
  const windDirection = convertWindDirectionDegreesToCardinals(current.wind_deg)
  const description = capitalizeFirstLetter(weather.description)

  useEffect(() => {
    const updateDateTime = () => {
      const { timeString, dateString } = formatDateTime()
      setCurrentTime(timeString)
      setCurrentDate(dateString)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardContent className="p-8">
        {/* Header with City and Time */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {weatherData.cityName}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span className="text-lg">{currentDate} • {currentTime}</span>
          </div>
        </div>

        {/* Main Weather Display */}
        <div className="grid grid-cols-3 gap-8 items-center mb-12">
          {/* Temperature */}
          <div className="space-y-2">
            <div className="text-8xl font-light text-gray-900">
              {Math.round(current.temp)}°
            </div>
            <div className="text-xl text-gray-600">
              Feels like {Math.round(current.feels_like)}°
            </div>
          </div>

          {/* Weather Icon */}
          <div className="flex justify-center">
            <div 
              className="text-9xl"
              dangerouslySetInnerHTML={{ __html: weatherIcon }}
            />
          </div>

          {/* Weather Description */}
          <div className="text-right">
            <div className="text-3xl font-semibold text-gray-900 mb-2">
              {description}
            </div>
            <div className="text-lg text-gray-600">
              Cloudy throughout the day
            </div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">🌡️</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Pressure</div>
            <div className="text-xl font-semibold text-gray-900">{pressure} mm</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">💧</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Humidity</div>
            <div className="text-xl font-semibold text-gray-900">{current.humidity}%</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">💨</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Wind Speed</div>
            <div className="text-xl font-semibold text-gray-900">{current.wind_speed} m/s</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">🧭</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Direction</div>
            <div className="text-xl font-semibold text-gray-900">{windDirection}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentWeather