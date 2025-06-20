import { useState, useEffect } from 'react'
import { formatDateTime } from '../utils/helpers'

const DateTime: React.FC = () => {
  const [timeString, setTimeString] = useState('')
  const [dateString, setDateString] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const { timeString: newTimeString, dateString: newDateString } = formatDateTime()
      setTimeString(newTimeString)
      setDateString(newDateString)
    }

    // Update immediately
    updateDateTime()

    // Update every second
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl md:text-xl flex flex-col items-center mt-2">
      <div className="mt-2 mb-1">{dateString}</div>
      <div className="time">
        <span>{timeString}</span>
      </div>
    </div>
  )
}

export default DateTime