import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import weatherImages from './icons-conditions';
import { weatherCardImages } from './icons-details';
import { getDayName, getFullHoursAndMinutes } from './functions';
import { TWeatherCondition } from './types';

type TWeatherCurrentProps = {
    condition: TWeatherCondition;
    temperature: number;
    maxTemperature: number;
    minTemperature: number; 
}

export default function WeatherCurrent(props: TWeatherCurrentProps) {

    const { condition, temperature, maxTemperature, minTemperature } = props;
    const imageSource = weatherImages[condition] || weatherImages['default'];
    let datetime = new Date();
    return (
        <View className="bg-white mb-4 pt-6 w-full h-52 flex justify-center items-stretch">
            <View className="flex-row justify-center items-stretch">

                <View className="flex-1 items-center ">
                    <Text className="text-lg">{getDayName(datetime) + ", " + datetime.getMonth() + " " + datetime.getFullYear()}</Text>
                    <Text className="text-3xl">{getFullHoursAndMinutes(datetime)}</Text>
                </View>

                <View className="flex-1 ">
                    <View className="pr-5 flex-row flex-1 ">
                        <Text className="flex-1 text-9xl">{temperature}</Text>
                        <Text className="text-2xl">°C</Text>
                    </View>
                    <Text>Feels like : tsy hiako</Text>
                </View>

                <View className="flex-1 ">
                    <Image
                        className="h-28 w-28"
                        source={imageSource} />
                </View>
            </View>
            <View className="flex-row justify-center items-center py-4">
                <View className="flex-row px-0 gap-1 items-center">
                    <Image source={weatherCardImages["mintmp"]} className="h-10 w-10" />
                     <Text>{minTemperature} °</Text>
                </View>
                <View className="flex-row px-5 gap-1 items-center">
                <Image source={weatherCardImages["maxtmp"]} className="h-10 w-10" />
                <Text>{maxTemperature} °</Text>
                </View>
            </View>
        </View>
    )
}