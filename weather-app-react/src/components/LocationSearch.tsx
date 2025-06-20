import { useState } from 'react'
import { Search, MapPin, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface LocationSearchProps {
  onLocationSearch: (cityName: string) => void
  loading: boolean
  error: string
  currentCity: string
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  onLocationSearch,
  loading,
  error,
  currentCity
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onLocationSearch(inputValue.trim())
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={loading ? 'Searching...' : 'Enter city name'}
                className="pl-12 h-14 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                disabled={loading}
              />
            </div>
            <Button 
              type="submit"
              disabled={loading || !inputValue.trim()}
              size="lg"
              className="h-14 px-8 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg border border-red-200">
              {error}
            </div>
          )}
          
          {!error && !loading && currentCity && (
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
              <MapPin className="h-4 w-4" />
              <span>Currently showing weather for <strong>{currentCity}</strong></span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

export default LocationSearch