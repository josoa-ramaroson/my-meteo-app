import { TWeatherForecast } from './types';


const sampleData: TWeatherForecast[] = [
  {
    location: "New York",
    datetime: new Date("2024-06-24T00:00:00Z"),
    temperature: 25,
    temperatureMax: 30,
    temperatureMin: 20,
    humidity: 60,
    precipitation: 0.2,
    pressure: 1015,
    windSpeed: 10,
    cloudcover: 75,
    uvindex: 7,
    sunrise: "06:22:53",
    sunset: "20:22:32",
    condition: "cloudy day",
    icon: "cloudy.png",
    hourly: [
      {
        hour: "00:00",
        temperature: 20,
        precipitation: 0.1,
        windSpeed: 5,
        condition: "clear night",
        icon: "clear.png"
      },
      {
        hour: "01:00",
        temperature: 19,
        precipitation: 0.1,
        windSpeed: 5,
        condition: "clear night",
        icon: "clear.png"
      },
      // Add more hourly data as needed
    ],
    tenDayForecast: [
      {
        location: "New York",
        datetime: new Date("2024-06-25T00:00:00Z"),
        temperature: 26,
        temperatureMax: 31,
        temperatureMin: 21,
        humidity: 55,
        precipitation: 0.1,
        pressure: 1016,
        windSpeed: 8,
        cloudcover: 50,
        uvindex: 8,
        sunrise: "06:23:44",
        sunset: "20:24:53",
        condition: "partly cloudy day",
        icon: "partly_cloudy.png",
      },
      {
        location: "New York",
        datetime: new Date("2024-06-26T00:00:00Z"),
        temperature: 24,
        temperatureMax: 29,
        temperatureMin: 19,
        humidity: 65,
        precipitation: 0.3,
        pressure: 1012,
        windSpeed: 12,
        cloudcover: 90,
        uvindex: 6,
        sunrise: "06:24:35",
        sunset: "20:25:44",
        condition: "rain day",
        icon: "rain.png",
      },
      // Add more daily forecast data as needed
    ]
  },
  {
    location: "Los Angeles",
    datetime: new Date("2024-06-24T00:00:00Z"),
    temperature: 28,
    temperatureMax: 34,
    temperatureMin: 22,
    humidity: 50,
    precipitation: 0,
    pressure: 1013,
    windSpeed: 6,
    cloudcover: 10,
    uvindex: 9,
    sunrise: "05:42:53",
    sunset: "20:23:32",
    condition: "sunny day",
    icon: "sunny.png",
    hourly: [
      {
        hour: "00:00",
        temperature: 22,
        precipitation: 0,
        windSpeed: 4,
        condition: "clear night",
        icon: "clear.png"
      },
      {
        hour: "01:00",
        temperature: 21,
        precipitation: 0,
        windSpeed: 4,
        condition: "clear night",
        icon: "clear.png"
      },
      // Add more hourly data as needed
    ],
    tenDayForecast: [
      {
        location: "Los Angeles",
        datetime: new Date("2024-06-25T00:00:00Z"),
        temperature: 29,
        temperatureMax: 35,
        temperatureMin: 23,
        humidity: 45,
        precipitation: 0,
        pressure: 1014,
        windSpeed: 7,
        cloudcover: 5,
        uvindex: 10,
        sunrise: "05:43:44",
        sunset: "20:24:53",
        condition: "sunny day",
        icon: "sunny.png",
      },
      {
        location: "Los Angeles",
        datetime: new Date("2024-06-26T00:00:00Z"),
        temperature: 27,
        temperatureMax: 33,
        temperatureMin: 21,
        humidity: 55,
        precipitation: 0,
        pressure: 1011,
        windSpeed: 5,
        cloudcover: 20,
        uvindex: 8,
        sunrise: "05:44:35",
        sunset: "20:25:44",
        condition: "partly cloudy day",
        icon: "partly_cloudy.png",
      },
      // Add more daily forecast data as needed
    ]
  },
  // Add more locations and their forecasts as needed
];
export default sampleData;
