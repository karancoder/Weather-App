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
const pressureElement = document.getElementById("pressure");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");

const locationInputButton = document.getElementById("location-search-btn");
const locationInputElement = document.getElementById("location");

// Global Variables
let lastValidCity = "Andaman";
let backgroundImageRes = "1600x900";
let mobileScreenMediaQueryElement = window.matchMedia("(max-width: 768px)");

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
const WIND_DIRECTION_TEXT = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
];
const WIND_CARDINAL_DIRECTIONS = [
    "↑ N",
    "↗ NE",
    "→ E",
    "↘ SE",
    "↓ S",
    "↙ SW",
    "← W",
    "↖ NW",
];
const OPEN_WEATHER_API_ICONS_TO_WU_ICONS = {
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

const hPA_TO_mm_Hg_CONVERSION_RATE = 0.75006157584566;

const API_KEY = "95860a4ff88ebd043ec824b1f84e3872";

// Add Event Listener
locationInputButton.addEventListener("click", handleLocationInput);
locationInputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        locationInputButton.click();
    }
});
mobileScreenMediaQueryElement.addEventListener(
    "change",
    updateBackgroundImageResBasedOnMediaQuery
);

// Refresh data every one second
setInterval(refreshAllData, 1000);
refreshAllData();
safeLoadWeatherData(lastValidCity, (firstCall = true));

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

async function getWeatherData(cityName) {
    let { latitude, longitude } = await getLatiLongFromCityName(cityName);
    let api_one_call_weather_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    let res;
    try {
        res = await fetch(api_one_call_weather_url);
    } catch (err) {
        throw "Failed to Fetch";
    }
    let data = await res.json();
    return data;
}

async function getLatiLongFromCityName(cityName) {
    let api_geocoding_url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`;
    let latitude, longitude;
    let res;
    try {
        res = await fetch(api_geocoding_url);
    } catch (err) {
        throw "Failed to Fetch";
    }
    let data = await res.json();
    if (data.length === 0) {
        throw "City not found!";
    }
    latitude = data[0]["lat"];
    longitude = data[0]["lon"];
    return { latitude, longitude };
}

async function handleLocationInput(event) {
    event.preventDefault();
    await safeLoadWeatherData(locationInputElement.value);
}

async function safeLoadWeatherData(cityName, firstCall = false) {
    try {
        await getAndUpdateWeatherData(cityName, firstCall);
        resetInputElement(cityName);
    } catch (err) {
        resetInputElement("Err: " + err);
    }
}

function resetInputElement(placeholder, value = "") {
    locationInputElement.placeholder = placeholder;
    locationInputElement.value = value;
}

async function getAndUpdateWeatherData(cityName, firstCall) {
    let weatherData = await getWeatherData(cityName);
    updateCurrentWeatherData(weatherData);
    if (!firstCall) {
        updateBackgroundImage(cityName);
    }
    lastValidCity = cityName;
}

function updateCurrentWeatherData(weatherData) {
    let currentWeatherData = weatherData.current;
    updateTemperatureData(currentWeatherData);
    updateGeneralWeatherInfo(currentWeatherData);
    updateAdditionalWeatherInfo(currentWeatherData);
}

function updateBackgroundImageResBasedOnMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        backgroundImageRes = "900x1600";
    } else {
        backgroundImageRes = "1600x900";
    }
    let currPlaceholder = locationInputElement.placeholder;
    if (!currPlaceholder.includes("Err: ")) {
        updateBackgroundImage(currPlaceholder);
    } else {
        updateBackgroundImage(lastValidCity);
    }
}

function updateBackgroundImage(cityName) {
    document.body.style.backgroundImage =
        "url(https://source.unsplash.com/" +
        backgroundImageRes +
        "/?" +
        cityName +
        ")";
}

function updateTemperatureData(currentWeatherData) {
    let { temp, feels_like } = currentWeatherData;
    currTemperatureElement.innerText = Math.round(temp);
    feelTemperatureElement.innerText = Math.round(feels_like);
}

function updateGeneralWeatherInfo(currentWeatherData) {
    let generalWeatherInfo = currentWeatherData.weather[0];
    let generalWeatherDescription = generalWeatherInfo["description"];
    generalWeatherDescription = capitalizeFirstLetter(
        generalWeatherDescription
    );
    generalWeatherIconElement.innerHTML =
        OPEN_WEATHER_API_ICONS_TO_WU_ICONS[generalWeatherInfo["icon"]];
    generalWeatherTextElement.innerText = generalWeatherDescription;
}

function updateAdditionalWeatherInfo(currentWeatherData) {
    let { humidity, pressure, wind_speed, wind_deg } = currentWeatherData;
    let wind_dir;
    pressure = convertPressureToMMHg(pressure);
    wind_dir = convertWindDirectionDegreesToCardinals(wind_deg);
    pressureElement.innerText = `${pressure} mm Hg`;
    humidityElement.innerText = `${humidity}%`;
    windElement.innerText = `${wind_speed}m/s ${wind_dir}`;
}

function convertPressureToMMHg(pressure) {
    return Math.round(pressure * hPA_TO_mm_Hg_CONVERSION_RATE);
}

function convertWindDirectionDegreesToText(windDirection) {
    return WIND_DIRECTION_TEXT[(windDirection / 22.5).toFixed(0)];
}

function convertWindDirectionDegreesToCardinals(windDirection) {
    return WIND_CARDINAL_DIRECTIONS[Math.round(windDirection / 45) % 8];
}

function capitalizeFirstLetter(string) {
    return string
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
}
