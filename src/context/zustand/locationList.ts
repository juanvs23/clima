import { LocationFinderResponse, LocationFinderResponseSlice } from '@/src/types/location';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';



export const locationList = createWithEqualityFn<LocationFinderResponseSlice,[["zustand/devtools", never]]>(
  devtools(
    (set) => ({
        locationFinderResponse: [] as LocationFinderResponse[],
        locationSelected: null,
        queryString: '',
        setQueryString: (newQueryString: string) => set(() => ({ queryString: newQueryString })),
        setLocationSelected: (locationSelected: LocationFinderResponse) => set(() => ({ locationSelected })),
        setLocationFinderResponse: (locationFinderResponse) => set(() => ({ locationFinderResponse })),
    }),
    { name: 'locationList' }
  )
);