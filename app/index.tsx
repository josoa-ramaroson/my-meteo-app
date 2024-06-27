import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import LocationPage from './location-page';
import Weather from './weather';
import { TWeather } from './types';
import { View, Text } from 'react-native';
import { WeatherScreen } from './weather-screen';

const Tab = createMaterialBottomTabNavigator();
 

const screenOptions = ({ route }: { route: { name: string } }) => ({
  tabBarIcon: ({ focused, color }: { focused: boolean, color: string }) => {
    let iconName: React.ReactNode = '';

    if (route.name === 'Weather') {
      iconName = <FontAwesome name={'cloud'} size={24} color={color} />;
    } else if (route.name === 'Location') {
      iconName = <FontAwesome name={'map-marker'} size={24} color={color} />;
    }

    return iconName;
  },
  tabBarLabelStyle: {
    color: 'white',
  },
});



export default function Main() {
  return (
      <Tab.Navigator
        screenOptions={screenOptions}
        activeColor="#5E9FD4"
        inactiveColor="gray"
        barStyle={{
          backgroundColor: 'white',
        }}
        shifting={true}
      >
        <Tab.Screen
          name="Weather"
          component={WeatherScreen}
        />
        <Tab.Screen
          name="Location"
          component={LocationPage}
        />
      </Tab.Navigator>
  );
}
