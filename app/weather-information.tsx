import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import WeatherCurrent from './weather-current';
import WeatherDetails from './weather-details';
import WeatherHourly from './weather-hourly';
import { TWeatherCardProps, TWeatherForecast, TWeatherHourly } from './types';
import WeatherDailyForecast from './weather-daily-forecast';
import sampleWeatherForecasts from './sample-weather-forecast';
import SunriseSunset from './sunset-sunrise';


type TProps = {
  data: TWeatherForecast
}
export default function WeatherInformation(props: TProps) {
  const { data } = props;

  const {
    condition,
    temperature,
    temperatureMax,
    temperatureMin,
    sunrise,
    sunset,
    precipitation,
    humidity,
    windSpeed,
    pressure,
    uvindex,
    cloudcover,
    hourly,
    tenDayForecast
  } = data;
  

  const details: TWeatherCardProps[] = [
    {
      type: 'precipitation',
      value: precipitation
    },
    {
      type: 'humidity',
      value: humidity
    },
    {
      type: 'wind speed',
      value: windSpeed
    },
    {
      type: 'pressure',
      value: pressure
    },
    {
      type: 'uv',
      value: uvindex
    },
    {
      type: 'cloudcover',
      value: cloudcover
    }

  ]
  return (
    <ScrollView className="w-full h-full">
      <View>
        <WeatherCurrent condition={condition} temperature={temperature} maxTemperature={temperatureMax} minTemperature={temperatureMin} />
        <WeatherDetails details={details} />
        <WeatherHourly datas={hourly} />
        <WeatherDailyForecast datas={tenDayForecast} />
        <SunriseSunset sunRiseHour={sunrise} sunSetHour={sunset} />
      </View>
    </ScrollView>

  )
}
