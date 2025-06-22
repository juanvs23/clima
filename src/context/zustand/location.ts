import { baseLocation } from '@/src/constants/proyects';
import { Coordinates, LocationIq, LocationSlice } from '@/src/types/location';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';


export const useLocation = createWithEqualityFn<LocationSlice, [["zustand/devtools", never]]>(
    devtools( (set) => ({
        location:{
            placeID:'',
            licence:'',
            osmType:'',
            osmID:'',
            lat:'',
            lon:'',
            displayName:'',
            address:{
                government:'',
                houseNumber:'',
                road:'',
                quarter:'',
                suburb:'',
                city:'',
                stateDistrict:'',
                state:'',
                postcode:'',
                country:'',
                countryCode:'',

            },
            boundingbox:[
                '',
                '',
            ]
        },
        coords:baseLocation,
        setCoords: (coords:Coordinates) => set({coords}),
        setLocation: (location:LocationIq) => set({location}),
    })),
    Object.is
)