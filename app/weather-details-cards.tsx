import { View, Text, Image } from 'react-native'
import React from 'react'
import { weatherCardImages } from './icons-details';
import { TWeatherCardProps } from './types';


// precipitation humidity wind speed pressure uvindex cloudcover

export default function WeatherDetailsCards(props: TWeatherCardProps) {

    const { type, value } = props;


    return (
        <View
            className=" py-1 px-1 mr-2 mb-5 w-28 h-36  justify-center rounded-lg items-center bg-white drop-shadow-lg"
        >
            <View className="h-14 w-14 justify-center items-center">
                <Image source={weatherCardImages[type]} className="h-16 w-16" />
            </View>
            <View className="pt-1 justify-center items-center gap-2">
                <Text className="text-2xl">{value}</Text>
                <Text className="text-base">{type}</Text>
            </View>
        </View>
    )
}