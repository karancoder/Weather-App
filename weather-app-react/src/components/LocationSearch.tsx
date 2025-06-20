import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={loading ? 'Searching...' : currentCity}
            className="w-full h-14 pl-6 pr-16 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg focus:shadow-xl transition-all duration-300 placeholder:text-gray-500"
            disabled={loading}
          />
          <Button 
            type="submit"
            disabled={loading || !inputValue.trim()}
            size="sm"
            className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-700 hover:bg-gray-800 p-0"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            ) : (
              <Search className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>
      </form>
      
      {error && (
        <div className="mt-4 text-center text-white bg-red-500/20 backdrop-blur-sm p-4 rounded-lg border border-red-300">
          {error}
        </div>
      )}
    </div>
  )
}

export default LocationSearch