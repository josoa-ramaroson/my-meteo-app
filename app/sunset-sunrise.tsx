import { View, Text, Image } from 'react-native'
import React from 'react'
import { sunRiseImage, sunSetImage } from './icons-sun'

type TProps = {
    sunRiseHour: string;
    sunSetHour: string;
}
export default function SunriseSunset(props: TProps) {
    const {sunRiseHour , sunSetHour} = props;
    return (
        <View className="flex-row justify-around items-center px-4 py-3 mb-2 bg-white shadow-sm shadow-gray-300">
            <View className=" items-center">
                <View className="h-28 w-28">
                    <Image 
                    source={sunRiseImage} 
                    className="w-full h-full"
                    />
                </View>
                <Text className="text-xl font-bold">{sunRiseHour}</Text>
            </View>
            <View className="items-center">
                <View className="h-28 w-28">
                    <Image 
                    source={sunSetImage} 
                    className="w-full h-full"
                    />
                </View>
                <Text className="text-xl font-bold">{sunSetHour}</Text>
            </View>
        </View>
    )
}