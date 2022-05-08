// Selectors
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const currTemperatureElement = document.getElementById("current-temperature");
const feelTemperatureElement = document.getElementById("feels-temperature");
const generalWeatherIconElement = document.getElementById(
    "general-weather-info-icon"
);
const generalWeatherTextElement = document.getElementById(
    "general-weather-info-text"
);
const futureForecastListElement = document.getElementById(
    "future-forecast-list"
);

const locationInputButton = document.getElementById("location-search-btn");
const locationInputElement = document.getElementById("location");

// Constants
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const API_KEY = "95860a4ff88ebd043ec824b1f84e3872";

// Add Event Listener
locationInputButton.addEventListener("click", handleLocationInput);

// Refresh data every one second
setInterval(refreshAllData, 1000);
refreshAllData();

// Helper Functions
function refreshAllData() {
    let { hour, minutes, ampm, day, date, month, year } = getDateTimeData();
    ({ hour, minutes } = formatHourMinutes(hour, minutes));

    timeElement.innerHTML = `${hour}:${minutes} ${ampm}`;
    dateElement.innerHTML = `${DAYS[day]}, ${date} ${MONTHS[month]} ${year}`;
}

function getDateTimeData() {
    let currDateTime = new Date();
    let year = currDateTime.getFullYear();
    let month = currDateTime.getMonth();
    let date = currDateTime.getDate();
    let day = currDateTime.getDay();
    let hour = currDateTime.getHours();
    let minutes = currDateTime.getMinutes();
    let ampm = hour < 12 ? "AM" : "PM";
    return { hour, minutes, ampm, day, date, month, year };
}

function formatHourMinutes(hour, minutes) {
    hour = hour >= 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return { hour, minutes };
}

function getWeatherData() {}

function handleLocationInput(event) {
    event.preventDefault();
    console.dir(locationInputElement.value);
}
