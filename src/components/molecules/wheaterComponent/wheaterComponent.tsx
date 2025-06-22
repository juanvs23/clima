import { useWeather } from '@/src/hooks/useWeather'
import style from './wheaterComponent.module.css'
import useCLientLocation from '@/src/hooks/useClientLocation';
export default function WheaterComponent() {
    const {location:{lat,lon}} = useCLientLocation();
    const { localWeather } = useWeather(lat,lon)
    return(
        <div className={`flex items-center flex-col justify-center gap-0  text-white font-semibold rounded-lg py-2 px-3 font-digital glassMorh ${style.wheaterWidget}`}>
            {
                localWeather?.dt === 0?(
                   <>
                    <div className="innerClock text-4xl md:text-5xl xl:text-6xl flex  gap-2 animate-pulse">
                        <div className="h-10 w-10 bg-gray-200 rounded"></div>
                        <div className="h-10 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <h2 className="text-[10px] md:text-sm lg:text-base animate-pulse">
                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    </h2>
                   </>

                ):(
                    <>
                    <div className="innerClock text-4xl md:text-5xl xl:text-6xl">
            <i className={`owf owf-${localWeather?.weather?.[0]?.id}`}></i>    {localWeather?.main?.temp}°C
            </div>
            <h2 className="text-[10px] md:text-sm lg:text-base">
                {localWeather?.weather?.[0]?.description} - Wind: {localWeather?.wind?.speed} m/s
            </h2>
                    </>
                )
            }
        </div>
    )
}