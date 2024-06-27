import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WeatherDetailsCards from './weather-details-cards';
import { TWeatherCardProps } from './types';


type TProps = {
  details: TWeatherCardProps[];
}
export default function WeatherDetails(props: TProps) {

  const {details} = props;

  return (
    <View>
      <View className="flex-row flex-wrap items-center justify-center  pl-1">
        {
          details.map((data, index) => <WeatherDetailsCards
            key={index}
            {...data}
          />)
        }
      </View>
    </View>
  )
}