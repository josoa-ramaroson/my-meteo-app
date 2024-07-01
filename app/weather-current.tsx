import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import weatherImages from './icons-conditions';
import { weatherCardImages } from './icons-details';
import { getDayName, getFullHoursAndMinutes } from './functions';


type TWeatherCurrentProps = {
    condition: string;
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
    icon: string;
}

export default function WeatherCurrent(props: TWeatherCurrentProps) {

    const [datetime, setDateTime] = useState<Date>(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);
    
    const { condition, temperature, maxTemperature, minTemperature, icon } = props;
    const imageSource = weatherImages[icon] || weatherImages['default'];

    return (
        <View className="bg-white mb-1 pt-4 w-full flex justify-center items-stretch">

            <View className="items-center gap-2 pb-3">
                <View>
                    <Image
                        className="h-28 w-28"
                        source={imageSource} />
                </View>
                <View className="items-center self-stretch">
                    <Text className="capitalize text-3xl font-bold">{condition}</Text>
                </View>
            </View>

            <View className="flex-row justify-center items-stretch flex-1">

                <View className="flex-1 items-center justify-center">
                    <Text className="text-lg">{getDayName(datetime) + ", " + datetime.getMonth() + " " + datetime.getFullYear()}</Text>
                    <Text className="text-3xl">{getFullHoursAndMinutes(datetime)}</Text>
                </View>

                <View className="flex-1 items-stretch">
                    <View className="pr-5 flex-row  flex-1 items-start justify-center">
                        <Text className="text-7xl">{temperature}</Text>
                        <Text className="text-2xl">°C</Text>
                    </View>
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