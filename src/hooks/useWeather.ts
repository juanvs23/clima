'use client'

import { useEffect } from "react";

import { useLocalWeather } from "../context/zustand/uselocalWeather";
import { getWeather } from "../services/getWeather";
import useForecast from "./useForecast";

export function useWeather(lat:string,lon:string) {
    //tomamos la localizacion del usuario desde el estado
    
    const {setLocalWeather,localWeather} = useLocalWeather();
    const {getForecast} = useForecast()

   
    useEffect(()=>{
      if (lat!=='' && lon!=='') {
        getForecast(parseFloat(lat),parseFloat(lon))
        getWeather(lat,lon)
            .then(data=>{
                setLocalWeather(data)
            })
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[lat,lon]);
    
    return {localWeather}
}