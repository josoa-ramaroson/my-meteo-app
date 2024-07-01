import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GoogleMapsModal from '../maps/googles-maps-modal';


type TProps = {
    isShowed: boolean,
    setIsShowed: (value: boolean) => void,
    afterAdded: () => void
}
export default function LocationSearchPage(props: TProps) {
    const { isShowed, setIsShowed, afterAdded } = props;

    const handleClosing = () => {
        setIsShowed(false);
    }

    return (
        <Modal
            visible={isShowed}
            animationType='slide'
        >
            <View
                className="h-full w-full  relative"
            >
                <TouchableOpacity
                    onPress={handleClosing}
                >
                    <View
                        className="h-7 w-7 bg-red-400 justify-center items-center rounded-full absolute right-0 top-0"
                    >
                        <FontAwesome name='close' size={18} color='white' />
                    </View>
                </TouchableOpacity>
                <View
                    className="mt-10 h-[95%] w-screen py-4 px-5"
                >
                    <GoogleMapsModal afterAdded={() => {setIsShowed(false); afterAdded()}} />
                </View>
            </View>
        </Modal>
    )
}