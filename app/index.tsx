import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import LocationPage from './location/location-page';
import { TLocation } from './types';
import { WeatherScreen } from './weather-screen';
import { LocationsDB } from './database/db-location';
import { useEffect } from 'react';
import Weather from './weather';
import { useGeoLocalisation } from './hooks/use-geo-localisation';
import { useMyLocationStore } from './store/location-store';

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

const dataBaseText = async () => {
  try {
    await LocationsDB.createTable();
  } catch (error) {
    console.log('====================================');
    console.log('error:  ', error);
    console.log('====================================');
  }
}



export default function Main() {

  const [locationError, setLocationError] = useState('');
  const setMyLocation = useMyLocationStore((store) => store.setMyLocation)

  useEffect(() => {
    dataBaseText();
    useGeoLocalisation(setMyLocation);
  }, []);

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
