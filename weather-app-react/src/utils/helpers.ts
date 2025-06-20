import { DAYS, MONTHS, WIND_CARDINAL_DIRECTIONS, HPA_TO_MM_HG_CONVERSION_RATE } from './constants';

export interface DateTimeData {
  hour: number;
  minutes: number;
  ampm: string;
  day: number;
  date: number;
  month: number;
  year: number;
}

export function getDateTimeData(): DateTimeData {
  const currDateTime = new Date();
  const year = currDateTime.getFullYear();
  const month = currDateTime.getMonth();
  const date = currDateTime.getDate();
  const day = currDateTime.getDay();
  let hour = currDateTime.getHours();
  const minutes = currDateTime.getMinutes();
  const ampm = hour < 12 ? "AM" : "PM";
  
  return { hour, minutes, ampm, day, date, month, year };
}

export function formatHourMinutes(hour: number, minutes: number): { hour: string; minutes: string } {
  let formattedHour = hour >= 12 ? hour - 12 : hour;
  formattedHour = formattedHour === 0 ? 12 : formattedHour;
  const hourStr = formattedHour < 10 ? `0${formattedHour}` : formattedHour.toString();
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
  
  return { hour: hourStr, minutes: minutesStr };
}

export function formatDateTime(): { timeString: string; dateString: string } {
  const { hour, minutes, ampm, day, date, month, year } = getDateTimeData();
  const { hour: formattedHour, minutes: formattedMinutes } = formatHourMinutes(hour, minutes);
  
  const timeString = `${formattedHour}:${formattedMinutes} ${ampm}`;
  const dateString = `${DAYS[day]}, ${date} ${MONTHS[month]} ${year}`;
  
  return { timeString, dateString };
}

export function convertPressureToMMHg(pressure: number): number {
  return Math.round(pressure * HPA_TO_MM_HG_CONVERSION_RATE);
}

export function convertWindDirectionDegreesToCardinals(windDirection: number): string {
  return WIND_CARDINAL_DIRECTIONS[Math.round(windDirection / 45) % 8];
}

export function capitalizeFirstLetter(string: string): string {
  return string
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}

export function getDayFromTimestamp(timestamp: number): string {
  const day = new Date(timestamp * 1000).getDay();
  return DAYS[day];
}

export function getBackgroundImageUrl(cityName: string, isMobile: boolean = false): string {
  const resolution = isMobile ? "900x1600" : "1600x900";
  return `https://source.unsplash.com/${resolution}/?${encodeURIComponent(cityName)}`;
}