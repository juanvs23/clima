'use client';

import { convertTime } from '@/src/utils/convertTime';
import { useLocalWeather } from "../context/zustand/uselocalWeather";
import { getWeather } from "../services/getWeather";
import { ForeCastGraphicInterface, ForeCastInterface } from "../types/forCast";
import { WeatherResponse } from "../types/weather";
import { getCurrentDateTime } from '../utils/getCurrentTime';

export default function useForecast() {
    const { setForecastWeather,forecastWeather, setForecastGraph,forecastGraph  } = useLocalWeather();
    

    function adapterForcast(data:ForeCastInterface):ForeCastGraphicInterface {
        const city = data.city;
        const list = data.list;
        const newList: (string | number)[][] = []
        const heading = ["Hours", "Temperature", "Winds"];
        newList.push(heading);

        
        list.forEach((item:WeatherResponse) => {
            const currentDate = new Date();
            const { hour, minute } = getCurrentDateTime(item?.dt,currentDate);
            const { newHour,newMinute,meridiem  }  = convertTime(hour, minute);
            const temp = item.main?.temp ?? 0;
            const speed = item.wind?.speed ?? 0;
            newList.push( [`${newHour} : ${newMinute} ${meridiem}`, temp, speed ])
        })
        return {
            city,
            timeLine: newList as string|number[][]
        }
    }

    const getForecast =  (lat:number,lon:number) => {
        getWeather(lat.toString(),lon.toString(),'forecast').then(data => {
            if(data.cod === '200') {
            const graph = adapterForcast(data);
            setForecastGraph(graph);
            setForecastWeather(data);
            }
        })
    }
    return {
        getForecast,
        adapterForcast,
        forecastWeather,
        setForecastGraph,
        forecastGraph
    }
}