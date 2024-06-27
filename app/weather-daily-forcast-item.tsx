import { View, Text, Image } from 'react-native'
import React from 'react'
import { TWeatherForecast } from './types'
import { getDayName, getMonthNumber, getYearNumber } from './functions'
import weatherImages from './icons-conditions'
import { FontAwesome } from '@expo/vector-icons'

type TProps = {
    data: TWeatherForecast
}
export default function WeatherDailyForecastItem(props: TProps) {
    const { data } = props;
    const precipitation = Math.floor(data.precipitation * 10000) / 100.0;
    return (
        <View className="flex-row items-center justify-between gap-5 py-2">
            <View className="w-16">
                <Text>{getDayName(data.datetime)}</Text>
                <Text>{getMonthNumber(data.datetime) + "/" + getYearNumber(data.datetime)}</Text>
            </View>
            <View className="flex-1 flex-row items-center">
                <View className="w-8 h-8">
                    <Image 
                    source={weatherImages[data.condition]}
                    className="w-full h-full"
                    />
                </View>
                <Text className="flex-1 text-center">{data.condition}</Text>
            </View>
            <View>
                <Text>{data.temperatureMin + '~' + data.temperatureMax} °</Text>
            </View>
            <View className="flex-row items-center gap-1">
                <FontAwesome name="umbrella" size={15} color='black' />
                <Text>{precipitation} %</Text>
            </View>
            <View>
            </View>
        </View>
    )
}