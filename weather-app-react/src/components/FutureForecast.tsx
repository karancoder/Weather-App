import { useState, useEffect } from 'react'
import type { DailyForecast } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS_64_PX } from '../utils/constants'
import { getDayFromTimestamp, capitalizeFirstLetter } from '../utils/helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays } from 'lucide-react'

interface FutureForecastProps {
  dailyForecasts: DailyForecast[]
}

interface ForecastItemProps {
  forecast: DailyForecast
  index: number
}

const ForecastItem: React.FC<ForecastItemProps> = ({ forecast, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const weather = forecast.weather[0]
  const weatherIcon = OPEN_WEATHER_API_ICONS_TO_WU_ICONS_64_PX[weather.icon]
  const day = getDayFromTimestamp(forecast.dt)
  const description = capitalizeFirstLetter(weather.description)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <Card 
      className={`
        bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      style={{
        transitionDelay: `${index * 50}ms`
      }}
    >
      <CardContent className="p-6 text-center space-y-4">
        <div className="font-semibold text-gray-900 text-lg">
          {day}
        </div>
        
        <div
          className="flex justify-center"
          dangerouslySetInnerHTML={{ __html: weatherIcon }}
        />
        
        <div className="space-y-2">
          <div className="text-2xl font-bold text-gray-900">
            {Math.round(forecast.temp.max)}°
          </div>
          <div className="text-sm text-gray-600">
            {Math.round(forecast.temp.min)}°
          </div>
        </div>
        
        <Badge variant="outline" className="text-xs">
          {description}
        </Badge>
      </CardContent>
    </Card>
  )
}

const FutureForecast: React.FC<FutureForecastProps> = ({ dailyForecasts }) => {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-blue-600" />
          7-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {dailyForecasts.map((forecast, index) => (
            <ForecastItem
              key={forecast.dt}
              forecast={forecast}
              index={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default FutureForecast