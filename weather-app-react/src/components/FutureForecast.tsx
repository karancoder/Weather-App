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
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
          <CalendarDays className="h-6 w-6 text-gray-700" />
          7-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {dailyForecasts.map((forecast, index) => {
            const weather = forecast.weather[0]
            const weatherIcon = OPEN_WEATHER_API_ICONS_TO_WU_ICONS[weather.icon]
            const dayOfWeek = getDayFromTimestamp(forecast.dt)
            const description = capitalizeFirstLetter(weather.description)
            const isToday = index === 0

            return (
              <div
                key={index}
                className={`flex-shrink-0 w-32 rounded-2xl p-6 text-center transition-all duration-300 ${
                  isToday 
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <div className={`font-semibold mb-4 ${isToday ? 'text-white' : 'text-gray-900'}`}>
                  {isToday ? 'TODAY' : dayOfWeek.slice(0, 3).toUpperCase()}
                </div>
                
                <div 
                  className="text-5xl mb-4 mx-auto"
                  dangerouslySetInnerHTML={{ __html: weatherIcon }}
                />
                
                <div className="space-y-2">
                  <div className={`text-2xl font-bold ${isToday ? 'text-white' : 'text-gray-900'}`}>
                    {Math.round(forecast.temp.max)}°
                  </div>
                  <div className={`text-lg ${isToday ? 'text-white/80' : 'text-gray-500'}`}>
                    {Math.round(forecast.temp.min)}°
                  </div>
                  <div className={`text-sm ${isToday ? 'text-white/90' : 'text-gray-600'}`}>
                    {description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default FutureForecast