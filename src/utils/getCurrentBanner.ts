import { InfoCurrenTime } from "../constants/proyects";
import { CurrentBanner } from "../types/utils";


export function getCurrentBanner(hour:number):CurrentBanner {
   const {SUNRISE, MORNING, EVENING , SUNSET, NIGHT} = InfoCurrenTime;
   if(hour >= SUNRISE.start && hour < SUNRISE.end) return SUNRISE.bannerInfo;
   if(hour >= MORNING.start && hour < MORNING.end) return MORNING.bannerInfo;
   if(hour >= EVENING.start && hour < EVENING.end) return EVENING.bannerInfo;
   if(hour >= SUNSET.start && hour < SUNSET.end) return SUNSET.bannerInfo;
   return NIGHT.bannerInfo
}