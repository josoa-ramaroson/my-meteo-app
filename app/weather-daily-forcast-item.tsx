import { View, Text, Image } from 'react-native'
import React from 'react'
import { TDailyWeather, TWeatherForecast } from './types'
import { getDayName, getDayNumber, getMonthNumber, getYearNumber } from './functions'
import weatherImages from './icons-conditions'
import { FontAwesome } from '@expo/vector-icons'

type TProps = {
    data: TDailyWeather;
    timezoneOffset: number;
}
// type TDailyWeather = {
//     datetime: number; 
//     temperatureMax: number;
//     temperatureMin: number;
//     rain: number;
//     condition: string;
//     sunrise?: number;
//     sunset?: number;
export default function WeatherDailyForecastItem(props: TProps) {
    const { data, timezoneOffset } = props;
    const { datetime, condition, rain, temperatureMax, temperatureMin, icon } = data;
    
    const datetimeObject = new Date((datetime + timezoneOffset) * 1000);

    return (
        <View className="flex-row items-center justify-between gap-2 py-2">
            <View className="w-16">
                <Text>{getDayName(datetimeObject)}</Text>
                <Text>{ getDayNumber(datetimeObject) + "/" + getMonthNumber(datetimeObject)}</Text>
            </View>
            <View className="flex-1 flex-row items-center">
                <View className="w-8 h-8">
                    <Image
                        source={weatherImages[icon]}
                        className="w-full h-full"
                    />
                </View>
                <Text className="flex-1 capitalize font-bold text-center">{condition}</Text>
            </View>
            <View>
                <Text >{temperatureMin + ' ~ ' + temperatureMax} °</Text>
            </View>
            <View className="flex-row items-center gap-1">
                <FontAwesome name="umbrella" size={15} color='black' />
                <Text>{rain * 100} %</Text>
            </View>
            <View>
            </View>
        </View>
    )
}