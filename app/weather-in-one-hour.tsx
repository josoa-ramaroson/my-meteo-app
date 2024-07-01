import { View, Text, Image } from 'react-native'
import React from 'react' 
import weatherImages from './icons-conditions';
import { weatherCardImages } from './icons-details';
import { THourlyWeather } from './types';
import { getLocalTimeHHMM } from './functions';

type TProps = {
data: THourlyWeather

timeZoneOffset: number;
}

export default function WeatherInOneHour(props: TProps) {

    const {data, timeZoneOffset} = props;
    const { datetime, condition, temperature, humidity, icon } = data;
    const hour = getLocalTimeHHMM(datetime, timeZoneOffset)
    
    return (
        <View className="items-center gap-1 w-24">
            <Text>{hour}</Text>
            <Image
                source={weatherImages[icon]}
                className="h-10 w-10"
            />
            <Text className="text-lg">{temperature} °</Text>
            <View className="flex-row items-center gap-1">
                <Image
                    source={weatherCardImages['humidity']}
                    className="w-6 h-6"
                />
                <Text>{humidity}%</Text>
            </View>
        </View>
    )
}