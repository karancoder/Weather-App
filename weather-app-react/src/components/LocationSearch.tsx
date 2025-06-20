import { useState } from 'react'

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
    <div className="flex bg-white bg-opacity-20 border border-white border-opacity-20 backdrop-blur-md backdrop-saturate-150">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={error || (loading ? 'Loading...' : currentCity)}
        className="bg-transparent border-none p-3 text-4xl md:text-2xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:text-white"
        size={20}
        disabled={loading}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-transparent border-none p-3 text-2xl md:text-xl cursor-pointer text-white border-l-2 border-black border-opacity-20 hover:bg-white hover:bg-opacity-20 active:bg-black active:bg-opacity-10 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default LocationSearch