import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import weatherImages from './icons-conditions';
import { TWeatherCondition } from './types';
import { FontAwesome } from '@expo/vector-icons';

type TProps = {
    defaultLocation: boolean;
    location: string;
    temperature: number;
    condition: TWeatherCondition;
}
export default function LocationItem(props: TProps) {


    const { location, temperature, condition, defaultLocation } = props;
    let u: boolean = true;
    return (
        <TouchableOpacity>
            <View className="p-2 mb-2 flex-row  justify-between items-center bg-white shadow-xl rounded-lg">
                <View className="w-14">
                    {defaultLocation && <FontAwesome name="home" color="black" size={40} />}
                </View>
                <View className="flex-1">
                    {
                        (location == "mine") ?
                            <View>
                                <FontAwesome name="map-marker" color="black" size={32} />
                            </View>
                            :
                            <View>
                                <Text>{location}</Text>
                            </View>
                    }
                </View>
                <View className="flex-row items-center gap-2">
                    <Text className="text-lg font-bold">{temperature} °C</Text>
                    <View className="h-16 w-16">
                        <Image
                            source={weatherImages[condition]}
                            className="h-full w-full" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}