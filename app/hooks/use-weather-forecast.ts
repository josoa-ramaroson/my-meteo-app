import { useEffect, useState } from "react";
import { LocationsDB } from "../database/db-location";
import { WeatherData } from "../weather-data";
import { TLocation, TWeatherForecast } from "../types";

export const useWeatherForecast = () => {
    const [weatherForecasts, setWeatherForecasts] = useState<TWeatherForecast[]>([]);

    useEffect(()=> {
        (async () => {
            const locations: TLocation[] = await LocationsDB.getAllLocations();
            const forecast: TWeatherForecast[] = await WeatherData.getWeatherFromList(locations);
            setWeatherForecasts(() => forecast);
        })()
    }, []);
    return { weatherForecasts, setWeatherForecasts };
}