import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native' 
import WeatherInOneHour from './weather-in-one-hour'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { THourlyWeather } from './types';

type TProps = {
    datas: THourlyWeather[];
    timeZoneOffset: number;
}
export default function WeatherHourly(props: TProps) {
    const { datas, timeZoneOffset } = props;

    return (
        <View className="w-screen px-4  gap-1 mb-2 shadow-sm shadow-gray-300 bg-white">
            <Text className="text-lg border-b-2 border-b-gray-300">Hourly Forecast</Text>
            <ScrollView
                horizontal={true}
                className="flex-row">
                <View className="flex-row py-4">
                    {
                        datas.map((data, index) => <WeatherInOneHour 
                                                            data={data}
                                                            timeZoneOffset={timeZoneOffset}
                                                            key={index}/>)
                    }
                </View>
            </ScrollView>
        </View>
    )
}