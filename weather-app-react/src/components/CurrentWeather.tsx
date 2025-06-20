import type { WeatherData } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS } from '../utils/constants'
import { convertPressureToMMHg, convertWindDirectionDegreesToCardinals, capitalizeFirstLetter } from '../utils/helpers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Thermometer, Droplets, Wind, Gauge } from 'lucide-react'

interface CurrentWeatherProps {
  weatherData: WeatherData
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  const { current } = weatherData
  const weather = current.weather[0]
  const weatherIcon = OPEN_WEATHER_API_ICONS_TO_WU_ICONS[weather.icon]
  const pressure = convertPressureToMMHg(current.pressure)
  const windDirection = convertWindDirectionDegreesToCardinals(current.wind_deg)
  const description = capitalizeFirstLetter(weather.description)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Weather Card */}
      <Card className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-6xl font-light">
                {Math.round(current.temp)}°
              </div>
              <div className="text-blue-100 text-lg">
                Feels like {Math.round(current.feels_like)}°
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                {description}
              </Badge>
            </div>
            <div className="text-center">
              <div 
                className="text-8xl mb-2"
                dangerouslySetInnerHTML={{ __html: weatherIcon }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Details Card */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Gauge className="h-5 w-5 text-blue-600" />
            Weather Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Thermometer className="h-4 w-4" />
                <span>Pressure</span>
              </div>
              <span className="font-semibold text-gray-900">{pressure} mm Hg</span>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Droplets className="h-4 w-4" />
                <span>Humidity</span>
              </div>
              <span className="font-semibold text-gray-900">{current.humidity}%</span>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Wind className="h-4 w-4" />
                <span>Wind Speed</span>
              </div>
              <span className="font-semibold text-gray-900">{current.wind_speed} m/s {windDirection}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CurrentWeather