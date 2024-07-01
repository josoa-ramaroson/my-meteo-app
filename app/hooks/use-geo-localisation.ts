import { useMyLocationStore } from "../store/location-store";
import * as Location from 'expo-location'
import { TLocation } from "../types";
import { getLocationFromCoordinates } from "../functions";
export function useGeoLocalisation(setMyLocation:(location: TLocation) => void ) {

    const handleGeoLocation = async () => {
        // permission (object)

        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.log('====================================');
            console.log('Permission to access location was denied');
            console.log('====================================');;
            return;
        }

        let coordinate = (await Location.getCurrentPositionAsync({})).coords;

        const myLocation: TLocation = await getLocationFromCoordinates(coordinate.latitude, coordinate.longitude);

        setMyLocation(myLocation);

    }
    handleGeoLocation();
}