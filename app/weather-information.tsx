import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import WeatherCurrent from './weather-current';
import WeatherDetails from './weather-details';
import WeatherHourly from './weather-hourly';
import { TWeatherCardProps, TWeatherForecast, THourlyWeather } from './types';

import SunriseSunset from './sunset-sunrise';
import WeatherDailyForecast from './weather-daily-forecast';


type TProps = {
  data: TWeatherForecast
}
export default function WeatherInformation(props: TProps) {
  const { data } = props;

  const {
    current,
    hourly,
    daily,
    timezone_offset
  } = data;


  const {
    condition,
    temperature,
    temperatureMax,
    temperatureMin,
    icon,
    feelsLike,
    sunrise,
    sunset
  } = current;
  const details: TWeatherCardProps[] = [
    {
      type: 'rain',
      value: current.rain
    },
    {
      type: 'humidity',
      value: current?.humidity ? current.humidity : 0
    },
    {
      type: 'wind speed',
      value: current?.windSpeed ? current.windSpeed : 0
    },
    {
      type: 'pressure',
      value: current?.pressure ? current.pressure : 0
    },
    {
      type: 'uv',
      value: current?.uvindex 
    },
    {
      type: 'cloudcover',
      value: current?.cloudcover ? current.cloudcover : 0
    }

  ]
  return (
    <ScrollView className="w-full h-full">
      <View>
        <WeatherCurrent
          condition={condition}
          temperature={temperature}
          maxTemperature={temperatureMax}
          minTemperature={temperatureMin}
          icon={icon}
        />
        <WeatherDetails details={details} />
        <WeatherHourly
          datas={hourly}
          timeZoneOffset={timezone_offset}
        />
        <WeatherDailyForecast
          datas={daily}
          timezoneOffset={timezone_offset}
        />
        <SunriseSunset
          sunRiseHour={sunrise}
          sunSetHour={sunset}
          timezoneOffset={timezone_offset}
        />
      </View>
    </ScrollView>

  )
}
