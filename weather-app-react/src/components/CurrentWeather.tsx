import type { WeatherData } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS } from '../utils/constants'
import { convertPressureToMMHg, convertWindDirectionDegreesToCardinals, capitalizeFirstLetter } from '../utils/helpers'

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
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Temperature Info */}
      <div className="flex-1 flex flex-col justify-center items-end md:items-end md:mr-2">
        <div className="text-8xl md:text-6xl font-light">
          {Math.round(current.temp)}
          <span>°</span>
        </div>
        <div className="text-xl md:text-lg pr-3">
          {Math.round(current.feels_like)}
          <span>°</span> feels
        </div>
      </div>

      {/* Weather Icon and Description */}
      <div className="flex-1 flex flex-col justify-center items-center h-full">
        <div 
          className="p-4 md:p-6 text-7xl md:text-5xl"
          dangerouslySetInnerHTML={{ __html: weatherIcon }}
        />
        <div className="px-2 py-1 rounded bg-black bg-opacity-35 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:bg-opacity-35 hover:scale-110">
          {description}
        </div>
      </div>

      {/* Additional Weather Info */}
      <div className="flex-1 flex flex-row md:flex-row justify-center md:justify-start md:ml-2 items-center text-xl md:text-lg text-gray-200 font-normal">
        <div className="flex flex-col items-start">
          <div className="p-1 text-3xl md:text-2xl">
            <i className="fa-solid fa-temperature-quarter"></i>
          </div>
          <div className="p-1 text-3xl md:text-2xl">
            <i className="fa-solid fa-droplet"></i>
          </div>
          <div className="p-1 text-3xl md:text-2xl">
            <i className="fa-solid fa-wind"></i>
          </div>
        </div>
        <div className="flex flex-col items-start ml-4">
          <div className="py-2 px-2">
            {pressure} mm Hg
          </div>
          <div className="py-2 px-2">
            {current.humidity}%
          </div>
          <div className="py-2 px-2">
            {current.wind_speed}m/s {windDirection}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather