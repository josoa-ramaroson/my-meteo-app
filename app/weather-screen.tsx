import React, { useEffect, useMemo, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import Weather from './weather';
import { View, Text } from 'react-native';
import { useWeatherForecast } from './hooks/use-weather-forecast';
import { TWeatherForecast } from './types';
import { useMyLocationStore } from './store/location-store';
import { useMyLocationWeather } from './hooks/use-my-location-weather';

type TabData = {
  name: string;
  component: React.ComponentType<any>;
};

const Tab = createMaterialTopTabNavigator();

export const WeatherScreen = () => {
  //const {weatherForecasts, setWeatherForecasts} = useWeatherForecast();

  const myLocation = useMyLocationStore((store) => store.myLocation);
  const { myWeather, setMyWeather } = useMyLocationWeather({ myLocation });

  
  const [tabs, setTabs] = useState<TabData[]>([]);


  // const tabsCalculation = useMemo(
  //   () => {
  //     return weatherForecasts.map((data, index) => ({
  //       name: data.location,
  //       component: (props: { route: RouteProp<ParamListBase, string>; navigation: any; }) => <Weather data={data} />,
  //     }));
  //   },

  //   [weatherForecasts]);

  // useEffect(() => {
  //   setTabs(tabsCalculation);
  // }, [tabsCalculation]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        swipeEnabled: false
      }}
    >
      <Tab.Screen name="default" >
        {() => myWeather ? <Weather data={myWeather} /> : <View><Text>Retrieving your weather...</Text></View>}
      </Tab.Screen>
      {/* <Tab.Screen name="Your location" >
        {() => <Weather data={ } />}
      </Tab.Screen> */}
      {/* {tabs && tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}>
          {tab.component}
        </Tab.Screen>
      ))} */}
    </Tab.Navigator>
  );
};
