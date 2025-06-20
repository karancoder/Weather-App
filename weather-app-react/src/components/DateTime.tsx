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
    <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-center gap-8 text-gray-700">
          <div className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-medium">{dateString}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-mono font-semibold">{timeString}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DateTime