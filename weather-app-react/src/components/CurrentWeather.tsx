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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Weather Card */}
      <Card className="lg:col-span-2 border-0 shadow-2xl" style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
      }}>
        <CardContent className="p-10">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="text-7xl font-light text-white">
                {Math.round(current.temp)}°
              </div>
              <div className="text-blue-100 text-xl">
                Feels like {Math.round(current.feels_like)}°
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-base">
                {description}
              </Badge>
            </div>
            <div className="text-center">
              <div 
                className="text-9xl mb-4"
                dangerouslySetInnerHTML={{ __html: weatherIcon }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Details Card */}
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-gray-900 flex items-center gap-3 text-xl">
            <Gauge className="h-6 w-6 text-blue-600" />
            Weather Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Thermometer className="h-5 w-5" />
                <span className="text-lg">Pressure</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">{pressure} mm Hg</span>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Droplets className="h-5 w-5" />
                <span className="text-lg">Humidity</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">{current.humidity}%</span>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Wind className="h-5 w-5" />
                <span className="text-lg">Wind Speed</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">{current.wind_speed} m/s {windDirection}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CurrentWeather