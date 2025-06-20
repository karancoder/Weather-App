import { useState, useEffect } from 'react'
import { Clock, Calendar } from 'lucide-react'
import { formatDateTime } from '../utils/helpers'
import { Card, CardContent } from '@/components/ui/card'

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
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-medium">{dateString}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-mono font-semibold">{timeString}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DateTime