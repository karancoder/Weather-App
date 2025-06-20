# Weather App React

A modern, responsive weather application built with React, TypeScript, Vite, and Tailwind CSS. Get current weather conditions and 7-day forecasts for any city worldwide.

## ✨ Features

- **Real-time Weather Data**: Current weather conditions using OpenWeatherMap API
- **7-Day Forecast**: Extended weather predictions with daily highs and lows
- **City Search**: Search for weather in any city worldwide
- **Live Clock**: Real-time date and time display
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background with shadcn/ui components
- **Professional Styling**: Proper spacing, typography, and visual hierarchy
- **Weather Icons**: Custom weather icons for visual weather representation
- **Error Handling**: Graceful error messages and loading states

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Modern icon library
- **OpenWeatherMap API** - Weather data source

## 🎨 Design Features

- **Light Gradient Theme**: Soft blue-to-purple gradient background
- **Glass Morphism**: Cards with backdrop blur effects
- **Consistent Spacing**: Professional padding and margins throughout
- **Typography Hierarchy**: Clear visual hierarchy with proper text sizing
- **Hover Effects**: Smooth transitions and interactive elements
- **Responsive Grid**: Adaptive layouts for different screen sizes

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free registration required)

## �️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   The app uses OpenWeatherMap API with the key: `95860a4ff88ebd043ec824b1f84e3872`
   
   You can use this key for testing, or get your own free API key from [OpenWeatherMap](https://openweathermap.org/api).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
weather-app-react/
├── public/
│   ├── wu-icons/          # Weather icon assets
│   └── wu-icons.css       # Weather icon styles
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── CurrentWeather.tsx
│   │   ├── DateTime.tsx
│   │   ├── FutureForecast.tsx
│   │   └── LocationSearch.tsx
│   ├── services/         # API services
│   │   └── weatherApi.ts
│   ├── types/           # TypeScript type definitions
│   │   └── weather.ts
│   ├── utils/           # Utility functions and constants
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.tsx         # Application entry point
├── components.json       # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌤️ API Information

The app uses OpenWeatherMap's free APIs:
- **Current Weather API** (`/data/2.5/weather`) - Current weather conditions
- **5-Day Forecast API** (`/data/2.5/forecast`) - Extended forecast data

The 5-day forecast is processed to show daily summaries for the 7-day forecast display.

## 🎯 Key Components

### CurrentWeather
- Displays current temperature, feels-like temperature, and weather description
- Shows additional details: pressure, humidity, and wind information
- Features a gradient card design with weather icons

### FutureForecast  
- 7-day weather forecast with daily high/low temperatures
- Responsive grid layout that adapts to screen size
- Hover effects and smooth transitions
- Weather icons and descriptions for each day

### LocationSearch
- City search with loading states and error handling
- Displays current city and search status
- Enhanced input with icons and proper feedback

### DateTime
- Real-time clock that updates every second
- Displays current date and time in a clean format
- Side-by-side layout with calendar and clock icons

## � Recent Updates

### Latest Fixes (Gradient & Padding)
- ✅ Fixed gradient background CSS compatibility issue
- ✅ Enhanced padding and spacing throughout all components
- ✅ Improved typography hierarchy and visual consistency
- ✅ Better responsive design for mobile and tablet
- ✅ Enhanced user experience with larger touch targets

### Previous Updates
- ✅ Updated to use free OpenWeatherMap APIs (Current Weather + 5-day Forecast)
- ✅ Migrated from deprecated One Call API 2.5
- ✅ Complete UI redesign with shadcn/ui components
- ✅ Added TypeScript for better development experience
- ✅ Implemented modern React patterns with hooks

## 🐛 Troubleshooting

### Common Issues

1. **API Errors**
   - Ensure you have a valid internet connection
   - Verify the OpenWeatherMap API key is working
   - Check if the city name is spelled correctly

2. **Build Issues**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Ensure Node.js version is 18 or higher

3. **Development Server**
   - Port 5173 might be in use, Vite will automatically use the next available port
   - Check the terminal output for the correct localhost URL

## � License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
