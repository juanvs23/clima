import { CurrentBanner, CurrentDateTime } from "./utils";

export interface UseTimeSlice extends InfocurrentInterface {
    seCurrentBanner:(banner:CurrentBanner)=>void
    seTime:(time:CurrentDateTime)=>void
}

export interface InfocurrentInterface{
    time: CurrentDateTime,
    currentBanner: CurrentBanner,
}
