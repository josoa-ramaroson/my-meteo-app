import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import LocationItem from './location-item'
import LocationSearchPage from './location-search-page';
import { LocationsDB } from '../database/db-location';
import { TLocation } from '../types';
import { useMyLocationStore } from '../store/location-store';

export default function LocationPage() {
  const [isModalShowed, setIsModalShowed] = useState(false);

  const [locationList, setLocationList] = useState<any[]>([]);

  const [isModifying, setIsModifying] = useState(false);

  const myLocation = useMyLocationStore((store) => store.myLocation);

  useEffect(() => {

    (async () => {
      const location: any[] = await LocationsDB.getAllCity();
      setLocationList(location);
    })();

  }, []);


  const handlePlusClicked = () => {
    setIsModalShowed(true);
  };

  const refreshState = () => {
    (async () => {
      const location: any[] = await LocationsDB.getAllCity();
      setLocationList(location);
    })();
  }
  return (
    <View className="h-full relative">
      <View className="flex-row bg-white h-12 shadow-xl shadow-gray-400 ">
        <Text className="flex-1 text-center align-center pt-1 text-2xl font-extrabold">Location</Text>
        <TouchableOpacity
          className="p-2"
          onPress={() => setIsModifying((curr) => !curr)}
        >
          <FontAwesome name="pencil-square-o" color="black" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>

        <View className="p-2 rounded-lg ">
          <LocationItem
            defaultLocation={true}
            location={myLocation.city}
            place_id=''
            afterDelete={refreshState} 
          />
          {(locationList.length != 0) && locationList.map((data, index) => <LocationItem
            key={index + data.city}
            defaultLocation={false}
            location={data.city}
            place_id={data.place_id}
            afterDelete={refreshState}
            isModifying={isModifying}
          />)}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handlePlusClicked}
        className="absolute right-5 bottom-5"
      >
        <View className={"bg-[#5E9FD4] active:bg-[#A3D4F7] justify-center items-center w-16 h-16 rounded-2xl transition-all duration-700 ease-in-out "} >
          <FontAwesome name="plus" color="white" size={30} />
        </View>
      </TouchableOpacity>

      <LocationSearchPage
        isShowed={isModalShowed}
        setIsShowed={setIsModalShowed}
        afterAdded={refreshState}
      />
    </View>
  )
}