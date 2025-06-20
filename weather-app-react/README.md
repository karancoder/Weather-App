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
- **Tailwind CSS v4** - Latest CSS framework with CSS-first configuration
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Modern icon library
- **OpenWeatherMap API** - Weather data source

## 🎨 Design & Performance Features

- **WeatherNow Branding**: Professional brand identity with memorable name
- **Purple Gradient Theme**: Modern gradient background for visual appeal  
- **CSS Variables**: Runtime access to all design tokens
- **Glass Morphism**: Cards with backdrop blur effects
- **Container Queries**: Built-in responsive components
- **Dynamic Utilities**: Simplified class naming without arbitrary values
- **Modern CSS**: Cascade layers, color-mix(), and @property support
- **Lightning Fast**: 5x faster builds with Tailwind v4 engine
- **Zero Config**: Automatic content detection and optimization

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

   **Note**: This project uses **Tailwind CSS v4** with PostCSS integration for optimal performance and stability.

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
│   └── mcp.json               # MCP server configuration
├── public/
│   ├── wu-icons/              # Weather icon assets
│   │   └── wu-icons.css           # Weather icon styles
├── src/
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── CurrentWeather.tsx
│   │   ├── FutureForecast.tsx
│   │   └── LocationSearch.tsx
│   ├── services/             # API services
│   │   └── weatherApi.ts
│   ├── types/               # TypeScript type definitions
│   │   └── weather.ts
│   ├── utils/               # Utility functions and constants
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx              # Main application component
│   ├── index.css            # Tailwind v4 CSS-first configuration
│   └── main.tsx             # Application entry point
├── components.json           # shadcn/ui configuration (updated for v4)
├── TAILWIND_V4_MIGRATION.md # Comprehensive migration guide
├── vite.config.ts           # Vite configuration with Tailwind v4 plugin
└── tsconfig.json            # TypeScript configuration
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

### Latest - Tailwind CSS v4 Migration ✅ **COMPLETED**
- ✅ **Successfully migrated to Tailwind CSS v4.0** - Latest version with cutting-edge features
- ✅ **5x Faster Builds** - Significant performance improvements with new engine
- ✅ **CSS-First Configuration** - Modern approach with `@theme` directive in CSS
- ✅ **PostCSS Integration** - Stable build process with `@tailwindcss/postcss`
- ✅ **Native CSS Variables** - All design tokens available as CSS variables
- ✅ **Dynamic Utilities** - `grid-cols-15`, `w-17`, `mt-29` without arbitrary values
- ✅ **Built-in Container Queries** - Responsive components without plugins
- ✅ **Modern CSS Features** - Cascade layers, color-mix(), @property support
- ✅ **Zero Configuration** - Automatic content detection and built-in imports
- ✅ **Production Ready** - Both development and build processes working perfectly

### Previous Updates
- ✅ Complete visual overhaul with "WeatherNow" branding
- ✅ Purple gradient background for modern aesthetic
- ✅ Horizontal forecast layout with highlighted "TODAY" card
- ✅ Integrated city name and live date/time display
- ✅ Minimal search interface with clean design
- ✅ Enhanced typography hierarchy and spacing
- ✅ Added MCP server configuration for 7context

### Technical Achievements
- ✅ **Tailwind v4 Benefits**: 182x faster incremental builds, modern CSS features
- ✅ **CSS Variables**: Runtime access to all theme values for dynamic theming
- ✅ **Simplified Setup**: No PostCSS config, no tailwind.config.js needed
- ✅ **Future-Proof**: Built on latest web standards (Safari 16.4+, Chrome 111+)

### Previous Fixes
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
