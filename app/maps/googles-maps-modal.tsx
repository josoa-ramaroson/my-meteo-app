import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { apiKey } from './config';
import { TLocation } from '../types';
import { LocationsDB } from '../database/db-location';
import MapView, { Marker, Region } from 'react-native-maps';
import axios from 'axios';
import { getLocationFromCoordinates } from '../functions';
import { useMyLocationStore } from '../store/location-store';

const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';


type TProps = {
    afterAdded: () => void
}

type TCoordinates = {
    latitude: number;
    longitude: number;
}
export default function GoogleMapsModal(props: TProps) {
    const mapRef = useRef<MapView | null>(null);

    const { afterAdded } = props;

    const [newLocation, setNewLocation] = useState<TLocation>();

    const [inputPlaceValue, setInputPlaceValue] = useState('');

    const [selectedCoordinates, setSelectedCoordinates] = useState<TCoordinates>({ latitude: 0, longitude: 0 }); // la position initial de l'utilisateur
    
    const myLocation = useMyLocationStore((store) => store.myLocation);


    useEffect(() => {
        const fetchCityName = async () => {
            try {
                const { latitude, longitude } = selectedCoordinates;
        
                const clickedLocation: TLocation = await getLocationFromCoordinates(latitude, longitude);
                setNewLocation(clickedLocation);
                setInputPlaceValue(clickedLocation.city)
            }
            catch (error) {
                console.log("error fetching city name", error)
            }
        }

        fetchCityName();
    }, [selectedCoordinates]);

    const handlePressed = (data: any, details: any = null) => {
        const { lat, lng } = details?.geometry.location;

        const clickedLocation: TLocation = {
            place_id: data.place_id,
            description: data.description,
            city: data.terms[0].value,
            country: data.terms[data.terms.length - 1].value,
            latitude: lat,
            longitude: lng
        };

        const region: Region = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        };

        // mapRef.current?.animateToRegion(region, 1000)
        
        setSelectedCoordinates({ latitude: lat, longitude: lng });
        setNewLocation(clickedLocation);
    }


    const handleAddClicked = () => {
        if (!newLocation) return;

        LocationsDB.saveLocation(newLocation);
        afterAdded();
    };

    const handleMapPress = (event: any) => {
        setSelectedCoordinates(event.nativeEvent.coordinate);
    }
    

    return (
        <View className=" h-full"
        >
            <GooglePlacesAutocomplete
                placeholder="Type a place"
                query={{
                    key: apiKey
                }}
                fetchDetails={true}

                styles={{
                    textInput: {
                        borderColor: 'gray',
                        borderWidth: 2,
                        fontSize: 16
                    },
                    container: {
                        flex: 0
                    }
                }}
                onPress={handlePressed}
                onFail={(error: any) => console.log(error)}
                onNotFound={() => console.log("no resulsts")}

                textInputProps={{
                    value: inputPlaceValue,
                    onChangeText: setInputPlaceValue,
                }}
            // listEmptyComponent={() => (
            //     <View style={{ flex: 1 }} className="items-center py-4 bg-white rounded-xl">
            //         <Text>No results were found</Text>
            //     </View>
            // )}

            // currentLocation={true}
            // currentLocationLabel="Your location"
            />

            <MapView
                className="flex-1 w-full bg-green-500"
                ref={mapRef}
                initialRegion={{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                onPress={handleMapPress}
            // onRegionChange={regionData => console.log(regionData)}
            >
                {selectedCoordinates && <Marker coordinate={selectedCoordinates} />}
            </MapView>

            <TouchableOpacity
                onPress={handleAddClicked}
                className="absolute right-5 bottom-5"
            >
                <View className={"bg-[#5E9FD4] active:bg-[#A3D4F7] justify-center items-center w-16 h-16 rounded-2xl transition-all duration-700 ease-in-out "} >
                    <Text className="text-white">Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}