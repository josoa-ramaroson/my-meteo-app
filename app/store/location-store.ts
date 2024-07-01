import { create } from 'zustand';
import { TMyLocationStore, TLocation } from '../types';


export const useMyLocationStore = create<TMyLocationStore>(set => ({
    myLocation: {
        city: '',
        country: '',
        latitude: -21.4421587,
        longitude: 47.0976989
    },
    setMyLocation: (location: TLocation) => set({myLocation: location})
}))