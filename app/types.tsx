import { ImageSourcePropType } from "react-native";



type WeatherCard =
    | 'rain'
    | 'humidity'
    | 'wind speed'
    | 'pressure'
    | 'uv'
    | 'cloudcover'
    | 'mintmp'
    | 'maxtmp';

 

type TWeatherCardProps = {
    type: WeatherCard;
    value: number
}


type TCurrentWeather = {
    condition: string;
    datetime: number;
    temperature: number;
    temperatureMax: number;
    temperatureMin: number
    humidity: number;
    feelsLike: number;
    rain: number;
    pressure: number;
    windSpeed: number;
    cloudcover: number;
    uvindex: number;
    sunrise: number;
    sunset: number;
    icon: string;
}
type TDailyWeather = {
    datetime: number; 
    temperatureMax: number;
    temperatureMin: number;
    rain: number;
    icon: string;
    condition: string;
    sunrise?: number;
    sunset?: number;
}

type THourlyWeather = {
    datetime: number;
    condition: string;
    humidity: number;
    temperature: number;
    icon: string
};
type TWeatherForecast = {
    timezone_offset: number;
    location: string;
    current: TCurrentWeather;
    hourly: THourlyWeather[];
    daily: TDailyWeather[];
}

type TLocation = {
    id?: number
    place_id?: string
    description?: string
    city: string
    country?: string
    latitude: number
    longitude: number
}

type TMyLocationStore = {
    myLocation: TLocation,
    setMyLocation: (location: TLocation) => void
}
// Define a type for weather images
type TWeatherCard = Record<WeatherCard, ImageSourcePropType>;

export { TWeatherCardProps, TWeatherCard, WeatherCard, THourlyWeather, TWeatherForecast, TLocation, TMyLocationStore, TDailyWeather }
