import { View, Text, Image } from 'react-native'
import React from 'react'
import { TWeatherHourly } from './types'
import weatherImages from './icons-conditions';
import { weatherCardImages } from './icons-details';



export default function WeatherInOneHour(props: TWeatherHourly) {

    const { hour, condition, precipitation, temperature } = props;
    return (
        <View className="items-center gap-1 w-24">
            <Text>{hour}</Text>
            <Image
                source={weatherImages[condition]}
                className="h-10 w-10"
            />
            <Text className="text-lg">{temperature} °</Text>
            <View className="flex-row items-center gap-1">
                <Image
                    source={weatherCardImages['precipitation']}
                    className="w-6 h-6"
                />
                <Text>{precipitation}</Text>
            </View>
        </View>
    )
}