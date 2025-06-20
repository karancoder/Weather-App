# WeatherNow

A modern, responsive weather application built with React, TypeScript, Vite, and Tailwind CSS. Beautiful weather forecasts for anywhere in the world.

## ✨ Features

- **Real-time Weather Data**: Current weather conditions using OpenWeatherMap API
- **7-Day Forecast**: Extended weather predictions with daily highs and lows
- **City Search**: Minimal, clean search for weather in any city worldwide
- **Live Clock**: Real-time date and time display integrated into weather display
- **Modern UI**: Beautiful purple gradient background with clean, minimal design
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Styling**: Clean typography, proper spacing, and visual hierarchy
- **Weather Icons**: Custom weather icons for visual weather representation
- **Error Handling**: Elegant error messages and loading states

## 🎨 Design Highlights

- **WeatherNow Branding**: Professional brand identity with memorable name
- **Purple Gradient Theme**: Modern gradient background for visual appeal  
- **Clean Cards**: Rounded corners with backdrop blur effects
- **Horizontal Forecast**: Scrollable 7-day forecast with highlighted "TODAY" card
- **Integrated Layout**: City name, date/time, and weather in one cohesive display
- **Minimal Search**: Clean, rounded search bar with integrated button
- **Large Typography**: Prominent temperature display for immediate recognition

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Modern icon library
- **OpenWeatherMap API** - Weather data source

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free registration required)

## 🛠️ Installation

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
├── .cursor/
│   └── mcp.json           # MCP server configuration
├── public/
│   ├── wu-icons/          # Weather icon assets
│   │   └── wu-icons.css       # Weather icon styles
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── CurrentWeather.tsx
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
- **Integrated Display**: City name, date/time, and weather in one cohesive layout
- **Large Temperature**: Prominent 8xl temperature display for immediate recognition
- **Weather Icon**: Centered 9xl weather icon for visual context
- **Weather Details**: Four-column grid with pressure, humidity, wind speed, and direction
- **Live Updates**: Real-time clock updates every second

### FutureForecast  
- **Horizontal Layout**: Clean, scrollable 7-day forecast design
- **TODAY Highlight**: Purple gradient background for current day
- **Consistent Cards**: Uniform design with weather icons and temperatures
- **Responsive**: Horizontal scroll optimized for all screen sizes

### LocationSearch
- **Minimal Design**: Clean, rounded search bar without visual clutter
- **Integrated Button**: Circular search button built into the input
- **Visual Feedback**: Loading states and error handling with backdrop blur
- **Placeholder Context**: Shows current city as placeholder

## 🔄 Recent Updates

### Latest - Modern UI Redesign + Tailwind Fix
- ✅ Complete visual overhaul with "WeatherNow" branding
- ✅ Purple gradient background for modern aesthetic
- ✅ Horizontal forecast layout with highlighted "TODAY" card
- ✅ Integrated city name and live date/time display
- ✅ Minimal search interface with clean design
- ✅ Enhanced typography hierarchy and spacing
- ✅ **Fixed Tailwind CSS configuration** - All utility classes now work properly
- ✅ Added MCP server configuration for 7context

### Technical Fixes
- ✅ **Tailwind CSS Issue Resolved**: Fixed mixed v3/v4 configuration causing partial utility class failures
- ✅ **All Classes Working**: `gap-6`, `py-6`, `bg-white/95`, `backdrop-blur-sm`, `shadow-2xl`, `rounded-3xl` now work
- ✅ **Improved Performance**: Clean Tailwind v3 setup with proper color system
- ✅ **Better Development**: Full IntelliSense support and consistent styling

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

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
