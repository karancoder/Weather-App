# Weather App - React Version

> ⚠️ **API Update (June 2024)**: This app has been updated to use OpenWeatherMap's free APIs after the One Call API 2.5 deprecation. See [API_FIX.md](./API_FIX.md) for details.

> 🎨 **UI Redesign**: Completely redesigned with modern shadcn/ui components and beautiful light theme. See [UI_REDESIGN.md](./UI_REDESIGN.md) for details.

A modern, responsive weather application built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. This is a complete rewrite of the original vanilla JavaScript weather app with a stunning modern interface.

## 🚀 Features

- **Real-time Weather Data**: Get current weather conditions and 7-day forecasts
- **Modern UI Design**: Beautiful light theme with gradient backgrounds and glass-morphism effects
- **Location Search**: Search for weather in any city worldwide with enhanced input experience
- **Live Date & Time**: Always up-to-date time display with modern icons
- **Responsive Design**: Perfect on mobile, tablet, and desktop with adaptive grid layouts
- **Smooth Animations**: Elegant transitions, loading states, and hover effects
- **TypeScript**: Full type safety and better developer experience
- **Accessible**: Built with modern accessibility standards using shadcn/ui components

## 🎨 Design System

- **Component Library**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React for consistent, modern iconography
- **Color Palette**: Beautiful blue gradients with semi-transparent cards
- **Typography**: Clean hierarchy with proper contrast ratios
- **Layout**: CSS Grid with responsive breakpoints
- **Animations**: Smooth 300ms transitions with staggered entrance effects

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern, accessible component library
- **Lucide React** - Beautiful icon system
- **OpenWeatherMap API** - Weather data source

## 📦 Installation

1. **Clone and navigate to the project:**
   ```bash
   cd weather-app-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── CurrentWeather.tsx   # Current weather display
│   ├── DateTime.tsx         # Date and time component
│   ├── FutureForecast.tsx   # 7-day forecast
│   └── LocationSearch.tsx   # Location search input
├── services/            # API services
│   └── weatherApi.ts       # Weather API calls
├── types/               # TypeScript interfaces
│   └── weather.ts          # Weather data types
├── utils/               # Utility functions
│   ├── constants.ts        # App constants
│   └── helpers.ts          # Helper functions
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## 🌟 Key Components

### LocationSearch
- City name input with real-time search
- Error handling and loading states
- Enter key and button click support

### CurrentWeather
- Current temperature and "feels like" temperature
- Weather icons using Wu Weather icon font
- Additional info: pressure, humidity, wind speed/direction

### FutureForecast
- 7-day weather forecast
- Animated forecast cards
- Min/max temperatures and weather descriptions

### DateTime
- Real-time clock updates every second
- Formatted date display with day names and months

## 🎨 Styling

The app uses Tailwind CSS for styling with:
- Responsive design breakpoints
- Glassmorphism effects (backdrop blur, transparency)
- Smooth hover animations and transitions
- Mobile-first approach

## 🔧 Configuration

### API Keys
The app uses the OpenWeatherMap API. The API key is included in the code for demo purposes.

### Background Images
Dynamic backgrounds are fetched from Unsplash based on the searched location.

## 📱 Responsive Features

- **Desktop**: Three-column layout for current weather
- **Mobile**: Stacked vertical layout
- **Dynamic background resolution**: Adjusts based on screen size
- **Touch-friendly**: Large interactive elements for mobile

## 🎯 Conversion Highlights

This React version improves upon the original vanilla JavaScript app with:

✅ **Component-based architecture** - Modular, reusable components
✅ **TypeScript integration** - Type safety and better IDE support  
✅ **Modern React patterns** - Hooks, functional components
✅ **Tailwind CSS** - Utility-first styling approach
✅ **Vite tooling** - Fast development and optimized builds
✅ **Better error handling** - Proper async/await error management
✅ **Code organization** - Separated concerns with clear folder structure

## 🚀 Performance

- Fast initial load with Vite's optimized bundling
- Code splitting and tree shaking for smaller bundle sizes
- Efficient re-renders with React's reconciliation
- Lazy loading of background images

## 🔮 Future Enhancements

- Add weather alerts and notifications
- Implement geolocation for automatic location detection
- Add weather charts and graphs
- Include hourly forecasts
- Add dark/light theme toggle
- Implement offline caching with service workers

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
