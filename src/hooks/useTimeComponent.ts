'use client';
import { useCurrentTime } from "@/src/context/zustand/useCurrentTime";
import { convertTime } from "@/src/utils/convertTime";
import { getCurrentDateTime } from "@/src/utils/getCurrentTime";
import { useEffect } from "react";
import { useLocalWeather } from '../context/zustand/uselocalWeather';
import { getCurrentBanner } from "../utils/getCurrentBanner";

export const useTimeComponent = () => {
    const {currentBanner, seTime, seCurrentBanner,time} = useCurrentTime();
    const {localWeather} = useLocalWeather();
    const timeZone = localWeather?.timezone ? localWeather?.timezone:0;


    function getCurrentBannerByTime(){

        const currentTime = getCurrentDateTime(timeZone);
        seTime(currentTime)
        seCurrentBanner(getCurrentBanner(currentTime.hour));
    }
    useEffect(() => {
        if(!timeZone) return;
        seTime(getCurrentDateTime(timeZone)); 
        getCurrentBannerByTime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    useEffect(() => {
        let interval: NodeJS.Timeout;
        const date = new Date(); 
        seTime(getCurrentDateTime(timeZone,date)); 
        getCurrentBannerByTime()
        if(timeZone > 0) {  
            const date = new Date();
            seTime(getCurrentDateTime(timeZone,date));
            interval = setInterval(() => {
                getCurrentBannerByTime()
                seTime(getCurrentDateTime(timeZone, date));
            }, 1000*60);
        }
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeZone]);

    return {dataClock:convertTime(time.hour,time.minute),date:time.longDate,seTime, bannerUrl:currentBanner.banner,currentGreeting:currentBanner.greeting,time};
}