import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer'
import WeatherInformation from './weather-information';
import WeatherDrawerContent from './weather-drawer-content';
import { TWeatherForecast } from './types';
import CustomHeader from './custom-header';

const Drawer = createDrawerNavigator();
export default function Weather({ data }: { data: TWeatherForecast }) {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <WeatherDrawerContent {...props} />}>
      <Drawer.Screen
        name={data.location + ' n'} 
        options={{
          header: () => <CustomHeader
            address={data.location} 
          />
        }}
      >
        {() => <WeatherInformation data={data}/>}
      </Drawer.Screen>
    </Drawer.Navigator>

  )
}
