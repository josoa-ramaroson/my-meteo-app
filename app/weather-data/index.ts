import axios from "axios";
import { TDailyWeather, THourlyWeather, TLocation, TWeatherForecast } from "../types";

export class WeatherData {
    private static API_URL = "https://api.openweathermap.org/data/3.0/onecall";
    private static API_KEY = "940c3fdabbad78ae1cecda62e31fabe3";


    static async getWeatherFromLocation(location: TLocation): Promise<TWeatherForecast> {
        try {
            const weatherResponse = await axios.get(`${this.API_URL}?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${this.API_KEY}`);
            const weatherData =  weatherResponse.data;


            const currentWeather = weatherData.current;
            const dailyWeather = weatherData.daily;
            const hourlyWeather = weatherData.hourly;


            let hourly: THourlyWeather[] = [];

        for (let data of hourlyWeather) {
                let oneForecastHourly: THourlyWeather = {
                    datetime: data.dt,
                    condition: data.weather[0].description,
                    humidity: data.humidity,
                    temperature: data.temp,
                    icon: data.weather[0].icon
                }

                hourly.push(oneForecastHourly)
            }

            let daily: TDailyWeather[] = [];

            for (let data of dailyWeather) {
                let oneDayForecast: TDailyWeather = {
                    datetime: data.dt,
                    temperatureMax: data.temp.max,
                    temperatureMin: data.temp.min,
                    rain: (Object.hasOwn(data, 'rain') ? data.rain : 0),
                    condition: data.weather[0].description,
                    sunrise: data.sunrise,
                    sunset: data.sunset,
                    icon: data.weather[0].icon
                }

                daily.push(oneDayForecast);
            }

        const weatherForecast: TWeatherForecast = {
                timezone_offset: weatherData.timezone_offset,
                location: location.city + ', ' + location.country,
                current: {
                    datetime: currentWeather.dt,
                    temperature: currentWeather.temp,
                    temperatureMax: dailyWeather[0].temp.max,
                    temperatureMin: dailyWeather[0].temp.min,
                    humidity: currentWeather.humidity,
                    rain: (Object.hasOwn(dailyWeather[0], 'rain') ? dailyWeather[0].rain : 0),
                    pressure: currentWeather.pressure,
                    feelsLike:currentWeather.feels_like,
                    windSpeed: currentWeather.wind_speed,
                    cloudcover: currentWeather.clouds,
                    uvindex: currentWeather.uvi,
                    sunrise: currentWeather.sunrise,
                    sunset: currentWeather.sunset,
                    condition: currentWeather.weather[0].description,
                    icon: currentWeather.weather[0].icon,
                },
                hourly: hourly,
                daily: daily
            }
            return weatherForecast;
        } catch (error) {
            console.log("error getting weather data: ", error);
            return {
                timezone_offset: 0,
                current: {
                    condition: "",
                    datetime: 0,
                    temperature: 0,
                    temperatureMax: 0,
                    temperatureMin: 0,
                    humidity: 0,
                    rain: 0,
                    pressure: 0,
                    feelsLike:0,
                    windSpeed: 0,
                    cloudcover: 0,
                    uvindex: 0,
                    sunrise: 0,
                    sunset: 0,
                    icon: 'default'
                },
                location: location.city,
                hourly: [],
                daily: []
            };
        }
    }
    static async getWeatherFromList(locations: TLocation[]): Promise<TWeatherForecast[]> {
        let result: TWeatherForecast[] = [];


        for (let location of locations) {
            let forecast = await WeatherData.getWeatherFromLocation(location);

            if (forecast) result.push(forecast);
        }

        return result;
    }
}