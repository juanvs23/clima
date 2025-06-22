'use client'

import { WeatherResponse } from '@/src/types/weather';
import { convertTime } from '@/src/utils/convertTime';
import { getCurrentDateTime } from '@/src/utils/getCurrentTime';


export default function ForeCastSlide({foreItem}:{foreItem: WeatherResponse | { dt: number; } }) {
    
    const { dt  } = foreItem;
    const time = getCurrentDateTime(dt);
    const { newHour, newMinute, meridiem } = convertTime(time.hour, time.minute);
    if (!('weather' in foreItem) || !foreItem.weather) {
        return null;
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full   glassMorh p-4 mb-4 rounded-lg shadow-lg'>
            <i className={`owf owf-5x owf-${foreItem.weather[0].id}`}></i>
            <h3 className='text-lg font-semibold'>{ `${newHour}:${newMinute} ${meridiem}` }</h3>
            <p className='text-sm'>Temperature: {  foreItem.main?.temp } °C</p>
            <p className='text-sm'>Wind Speed: { foreItem.wind?.speed }  m/s</p>
        </div>
    );
}