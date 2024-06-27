import { ImageSourcePropType } from "react-native";

type TWeather = {
    address: string;
    datetime: Date;
}

type TWeatherCardProps = {
    type: WeatherCard;
    value: number
}
type WeatherCard =
    | 'precipitation'
    | 'humidity'
    | 'wind speed'
    | 'pressure'
    | 'uv'
    | 'cloudcover'
    | 'mintmp'
    | 'maxtmp';

    type TWeatherCondition =
    | 'clear night'
    | 'sunny day'
    | 'partly cloudy day'
    |'partly cloudy night'
    | 'cloudy day'
    | 'cloudy night'
    | 'overcast night'
    | 'overcast day'
    | 'mist night'
    | 'mist day'
    | 'fog night'
    | 'fog day'
    | 'lightRain day'
    | 'lightRain night'
    | 'rain day'
    | 'rain night'
    | 'thunderstorm night'
    | 'thunderstorm day'
    | 'snow day'
    | 'snow night'
    | 'hail day'
    | 'hail night'
    | 'Wind'
    | 'Tornado'
    | 'default';
type TWeatherHourly = {
        hour: string;
        condition: TWeatherCondition;
        precipitation: number;
        temperature: number;
    };

type TWeatherForecast = {
    location: string;
    datetime: Date;
    temperature: number;
    temperatureMax: number;
    temperatureMin: number;
    humidity: number;
    precipitation: number;
    pressure: number;
    windSpeed: number;
    cloudcover: number;
    uvindex: number;
    sunrise: string;
    sunset: string;
    condition: TWeatherCondition;
    hourly: TWeatherHourly[];
    tenDayForecast: TWeatherForecast[];
    icon?: string;
}

// Define a type for weather images
type TWeatherCard = Record<WeatherCard, ImageSourcePropType>;

    export {TWeatherCardProps, TWeatherCard,WeatherCard, TWeather, TWeatherHourly, TWeatherCondition, TWeatherForecast}
