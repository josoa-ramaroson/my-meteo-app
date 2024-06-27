import React, { useEffect, useMemo, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import Weather from './weather';
import sampleData from './sample-weather-forecast';
import { View } from 'react-native';

type TabData = {
  name: string;
  component: React.ComponentType<any>;
};

const Tab = createMaterialTopTabNavigator();

export const WeatherScreen = () => {
  const [weatherForecasts, setWeatherForecasts] = useState(sampleData);

  const [tabs, setTabs] = useState<TabData[]>([]);
  const tabsCalculation = useMemo(() => {
    return weatherForecasts.map((data, index) => ({
      name: data.location,
      component: (props: { route: RouteProp<ParamListBase, string>; navigation: any; }) => <Weather data={data} />,
    }));
  }, [weatherForecasts]);

  useEffect(() => {
    setTabs(tabsCalculation);
  }, [tabsCalculation]);

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false
    }}
    >
      {tabs && tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}>
          {tab.component}
        </Tab.Screen>
      ))}
      <Tab.Screen name="default" component={View} />
    </Tab.Navigator>
  );
};
