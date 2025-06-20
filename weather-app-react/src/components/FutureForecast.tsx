import { useState, useEffect } from 'react'
import type { DailyForecast } from '../types/weather'
import { OPEN_WEATHER_API_ICONS_TO_WU_ICONS_64_PX } from '../utils/constants'
import { getDayFromTimestamp, capitalizeFirstLetter } from '../utils/helpers'

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
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  const borderColorClass = () => {
    const remainder = (index + 1) % 3
    if (remainder === 1) return 'border-t-4 border-yellow-400 border-opacity-90'
    if (remainder === 2) return 'border-t-4 border-cyan-400 border-opacity-90'
    return 'border-t-4 border-white border-opacity-90'
  }

  return (
    <div
      className={`
        p-6 min-w-44 flex flex-col justify-center items-center border border-black border-opacity-20
        ${borderColorClass()}
        transition-all duration-500 ease-in
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-40 scale-0'}
      `}
    >
      <div className="m-1 p-1 font-normal transition-all duration-200 hover:scale-110">
        {day}
      </div>
      <div
        className="m-1 p-1 bg-black bg-opacity-20 rounded-full font-normal transition-all duration-200 hover:scale-110"
        dangerouslySetInnerHTML={{ __html: weatherIcon }}
      />
      <div className="m-1 p-1 font-normal transition-all duration-200 hover:scale-110">
        {Math.round(forecast.temp.min)}
        <span>°</span> / {Math.round(forecast.temp.max)}
        <span>°</span>
      </div>
      <div className="m-1 p-1 bg-black bg-opacity-20 rounded text-sm font-normal transition-all duration-200 hover:scale-110">
        {description}
      </div>
    </div>
  )
}

const FutureForecast: React.FC<FutureForecastProps> = ({ dailyForecasts }) => {
  return (
    <div className="bg-white bg-opacity-40 backdrop-blur-md backdrop-saturate-150 w-full overflow-y-auto flex flex-1">
      {dailyForecasts.map((forecast, index) => (
        <ForecastItem
          key={forecast.dt}
          forecast={forecast}
          index={index}
        />
      ))}
    </div>
  )
}

export default FutureForecast