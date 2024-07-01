import axios from "axios";
import { apiKey } from "./maps/config";
import { TLocation, TWeatherForecast } from "./types";
import { LocationsDB } from "./database/db-location";
import { WeatherData } from "./weather-data";

function getDayName(date: Date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}
function getFullHoursAndMinutes(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getMonthNumber(date: Date) {
    const month = date.getMonth().toString().padStart(2, '0');
    return month;
}
function getDayNumber(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    return day;
}

function getYearNumber(date: Date) {
    const year = date.getFullYear().toString().slice(2);
    return year;
}

function getHourAndMinutes(fullHours: string) {
    const hour = fullHours.slice(0, 5);
    return hour;
}

const getLocationFromCoordinates = async (latitude: number, longitude: number) => {
    const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
    const response = await axios.get(`${API_URL}?latlng=${latitude},${longitude}&key=${apiKey}`);
    const results = response.data.results[0];

    const addressComponents = results.address_components;

    const cityComponents = addressComponents.find((component: { types: string | string[]; }) => component.types.includes('locality'));
    const countryComponents = addressComponents.find((component: { types: string | string[]; }) => component.types.includes('country'));

    const resultedLocation: TLocation = {
        place_id: results.place_id,
        description: results.formatted_address.slice(7),
        city: cityComponents ? cityComponents.long_name : "city not found",
        country: countryComponents ? countryComponents.long_name : "country not found",
        latitude: latitude,
        longitude: longitude
    };
    return resultedLocation;
}

const getLocalTimeHHMM = (timestamp: number, timezoneOffset: number): string => {
    const localDate = new Date((timestamp + timezoneOffset) * 1000);

    const hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
const getLocalTimeHHMMSS = (timestamp: number, timezoneOffset: number): string => {
    const localDate = new Date((timestamp + timezoneOffset) * 1000);
    const second = localDate.getUTCSeconds().toString().padStart(2, '0');
    return `${getLocalTimeHHMM(timestamp, timezoneOffset)}:${second}`
}


export { getLocalTimeHHMM, getLocalTimeHHMMSS, getDayName, getFullHoursAndMinutes, getMonthNumber, getDayNumber, getYearNumber, getHourAndMinutes, getLocationFromCoordinates }