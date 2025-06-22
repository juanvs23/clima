import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';
import { InfoCurrenTime } from '@/src/constants/proyects';
import { InfocurrentInterface, UseTimeSlice } from '@/src/types/useTime';
import { CurrentBanner, CurrentDateTime } from '@/src/types/utils';


const initialTime:InfocurrentInterface ={
    time: {
        hour: 0,
        minute: 0,
        date: 0,
        month: 0,
        longDate: '',
    },
    currentBanner: InfoCurrenTime.DEAFULT.bannerInfo,
}

export const useCurrentTime = createWithEqualityFn<UseTimeSlice, [["zustand/devtools", never]]>(
   devtools( (set) => ({
        ...initialTime,
        seCurrentBanner: (banner:CurrentBanner) => set({ currentBanner: banner }),
        seTime: (time: CurrentDateTime) => set((state) => ({ ...state, time })),
    }),{
        name: 'useCurrentTime',
    })
)

