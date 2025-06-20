import type { DailyForecast } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS } from '../utils/constants'
import { getDayFromTimestamp, capitalizeFirstLetter } from '../utils/helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays } from 'lucide-react'

interface FutureForecastProps {
  dailyForecasts: DailyForecast[]
}

const FutureForecast: React.FC<FutureForecastProps> = ({ dailyForecasts }) => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="pb-6">
        <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
          <CalendarDays className="h-7 w-7 text-blue-600" />
          7-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
          {dailyForecasts.map((forecast, index) => {
            const weather = forecast.weather[0]
            const weatherIcon = OPEN_WEATHER_API_ICONS_TO_WU_ICONS[weather.icon]
            const dayOfWeek = getDayFromTimestamp(forecast.dt)
            const description = capitalizeFirstLetter(weather.description)

            return (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="font-semibold text-gray-900 text-lg">
                    {index === 0 ? 'Today' : dayOfWeek}
                  </div>
                  
                  <div 
                    className="text-6xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: weatherIcon }}
                  />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {Math.round(forecast.temp.max)}°
                      </span>
                      <span className="text-xl text-gray-500">
                        {Math.round(forecast.temp.min)}°
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default FutureForecast