import { View, Text } from 'react-native'
import React from 'react'
import { TDailyWeather, TWeatherForecast } from './types'
import WeatherDailyForecastItem from './weather-daily-forcast-item';

type TProps = {
  datas: TDailyWeather[];
  timezoneOffset: number;
}
export default function WeatherDailyForecast(props: TProps) {
  const { datas, timezoneOffset } = props;
  return (
    <View className="px-4 pt-3 mb-2 bg-white shadow-sm shadow-gray-300">
      <Text className="text-lg border-b-1 border-gray-200">Daily Forecast</Text>
      <View
        className="w-full">
        <View>
          {
            datas.map((data, index) => <WeatherDailyForecastItem
                                              data={data}
                                              timezoneOffset={timezoneOffset}
                                              key={index} />)
          }
        </View>
      </View>
    </View>
  )
}