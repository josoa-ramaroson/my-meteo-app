import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import LocationItem from './location-item'

export default function LocationPage() {
  
  const handlePlusClicked = () => {
    
  };
  return (
    <View className="h-full relative">
      <View className="flex-row bg-white h-12 shadow-xl shadow-gray-400 ">
        <Text className="flex-1 text-center align-center pt-1 text-2xl font-extrabold">Location</Text>
        <TouchableOpacity
          className="p-2"
        >
          <FontAwesome name="pencil-square-o" color="black" size={24} />
        </TouchableOpacity>
      </View>

      <View className="p-2 rounded-lg ">
        <LocationItem 
        defaultLocation={true} 
        location="mine" 
        temperature={10.0}
        condition='partly cloudy day'
        />
        <LocationItem 
        defaultLocation={false} 
        location="Antananarivo" 
        temperature={5.0}
        condition='sunny day'
        />
      </View>
      <TouchableOpacity
      onPress={handlePlusClicked}
      className="absolute right-5 bottom-5"
      >
        <View className={"bg-[#5E9FD4] active:bg-[#A3D4F7] justify-center items-center w-16 h-16 rounded-2xl transition-all duration-700 ease-in-out " } >
          <FontAwesome name="plus" color="white" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  )
}