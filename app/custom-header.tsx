import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

type TCustomHeader = {
    address: string; 
}

export default function CustomHeader({ address }: TCustomHeader) {
    const navigation = useNavigation();


    return (
        <View className="flex-row bg-white shadow-lg shadow-gray-400">
            <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            className="flex items-center justify-center p-2"
            >
                <Text ><FontAwesome name="bars" size={24} color="black"  /></Text> 
            </TouchableOpacity>
            <View className="flex flex-1 items-center justify-center py-3">
                <Text className="text-xl">
                    {address}
                </Text> 
            </View>
        </View>
    )
}