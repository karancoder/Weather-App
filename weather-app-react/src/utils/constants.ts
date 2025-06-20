export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const WIND_DIRECTION_TEXT = [
  "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N",
];

export const WIND_CARDINAL_DIRECTIONS = [
  "↑ N", "↗ NE", "→ E", "↘ SE",
  "↓ S", "↙ SW", "← W", "↖ NW",
];

export const OPEN_WEATHER_API_ICONS_TO_WU_ICONS: Record<string, string> = {
  // Day
  "01d": `<i class="wu wu-white wu-128 wu-sunny"></i>`,
  "02d": `<i class="wu wu-white wu-128 wu-partlycloudy"></i>`,
  "03d": `<i class="wu wu-white wu-128 wu-cloudy"></i>`,
  "04d": `<i class="wu wu-white wu-128 wu-cloudy"></i>`,
  "09d": `<i class="wu wu-white wu-128 wu-chancerain"></i>`,
  "10d": `<i class="wu wu-white wu-128 wu-rain"></i>`,
  "11d": `<i class="wu wu-white wu-128 wu-tstorms"></i>`,
  "13d": `<i class="wu wu-white wu-128 wu-snow"></i>`,
  "50d": `<i class="wu wu-white wu-128 wu-hazy"></i>`,
  // Night
  "01n": `<i class="wu wu-white wu-128 wu-sunny wu-night"></i>`,
  "02n": `<i class="wu wu-white wu-128 wu-partlycloudy wu-night"></i>`,
  "03n": `<i class="wu wu-white wu-128 wu-cloudy wu-night"></i>`,
  "04n": `<i class="wu wu-white wu-128 wu-cloudy wu-night"></i>`,
  "09n": `<i class="wu wu-white wu-128 wu-chancerain wu-night"></i>`,
  "10n": `<i class="wu wu-white wu-128 wu-rain wu-night"></i>`,
  "11n": `<i class="wu wu-white wu-128 wu-tstorms wu-night"></i>`,
  "13n": `<i class="wu wu-white wu-128 wu-snow wu-night"></i>`,
  "50n": `<i class="wu wu-white wu-128 wu-hazy wu-night"></i>`,
};

export const OPEN_WEATHER_API_ICONS_TO_WU_ICONS_64_PX: Record<string, string> = {
  // Day
  "01d": `<i class="wu wu-white wu-64 wu-sunny"></i>`,
  "02d": `<i class="wu wu-white wu-64 wu-partlycloudy"></i>`,
  "03d": `<i class="wu wu-white wu-64 wu-cloudy"></i>`,
  "04d": `<i class="wu wu-white wu-64 wu-cloudy"></i>`,
  "09d": `<i class="wu wu-white wu-64 wu-chancerain"></i>`,
  "10d": `<i class="wu wu-white wu-64 wu-rain"></i>`,
  "11d": `<i class="wu wu-white wu-64 wu-tstorms"></i>`,
  "13d": `<i class="wu wu-white wu-64 wu-snow"></i>`,
  "50d": `<i class="wu wu-white wu-64 wu-hazy"></i>`,
  // Night
  "01n": `<i class="wu wu-white wu-64 wu-sunny wu-night"></i>`,
  "02n": `<i class="wu wu-white wu-64 wu-partlycloudy wu-night"></i>`,
  "03n": `<i class="wu wu-white wu-64 wu-cloudy wu-night"></i>`,
  "04n": `<i class="wu wu-white wu-64 wu-cloudy wu-night"></i>`,
  "09n": `<i class="wu wu-white wu-64 wu-chancerain wu-night"></i>`,
  "10n": `<i class="wu wu-white wu-64 wu-rain wu-night"></i>`,
  "11n": `<i class="wu wu-white wu-64 wu-tstorms wu-night"></i>`,
  "13n": `<i class="wu wu-white wu-64 wu-snow wu-night"></i>`,
  "50n": `<i class="wu wu-white wu-64 wu-hazy wu-night"></i>`,
};

export const HPA_TO_MM_HG_CONVERSION_RATE = 0.75006157584566;

export const API_KEY = "95860a4ff88ebd043ec824b1f84e3872";