import { useEffect, useState } from "react";
import { LocationsDB } from "../database/db-location";
import { WeatherData } from "../weather-data";
import { TLocation, TWeatherForecast } from "../types";

type THookParameters = {
    myLocation: TLocation ;
}
export const useMyLocationWeather = (params: THookParameters) => {
    const { myLocation } = params;
    
    const [myWeather, setMyWeather] = useState<TWeatherForecast>();
    
    useEffect(() => {
        const getMyWeather = async () => {
            const weather: TWeatherForecast = await WeatherData.getWeatherFromLocation(myLocation);
            setMyWeather(weather);
        }

        getMyWeather();
    }, [myLocation])

    return { myWeather, setMyWeather };
}