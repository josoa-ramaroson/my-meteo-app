import { View, Text, Image, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import weatherImages from '../icons-conditions';
import { TWeatherCondition } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { LocationsDB } from '../database/db-location';

type TProps = {
    defaultLocation: boolean;
    location: string;
    place_id: string;
    afterDelete: () => void;
    isModifying?: boolean;
}
export default function LocationItem(props: TProps) {


    const { location, defaultLocation, place_id, afterDelete, isModifying } = props;
    const condition = "cloudy day", temperature = 15;

    let u: boolean = true;
    const handleDelete = () => {
        // Alert.prompt("Delete this from location ", ['OK')
        LocationsDB.deleteLocation(place_id)
        afterDelete();
    }
    return (

        <View className="p-2 mb-2 flex-row  justify-between items-center bg-white shadow-xl rounded-lg">
            <View className="w-14">
                {defaultLocation && <FontAwesome name="map-marker" color="black" size={40} />}
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
            {isModifying && <TouchableOpacity
            onPress={handleDelete}
            >
                <View className="justify-center px-2">
                    <FontAwesome name="trash" size={30} color="red" />
                </View>
            </TouchableOpacity>}
        </View>

    )
}