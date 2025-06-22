'use client'

import { getLocations } from "@/src/services/getLocations"
import { useEffect } from "react";
import { locationList } from "../context/zustand/locationList";
import { useLocalWeather } from "../context/zustand/uselocalWeather";
import { getWeather } from "../services/getWeather";
import { useLocation } from "../context/zustand/location";
import { baseLocation } from "../constants/proyects";
import useForecast from "./useForecast";


export const useLocationList = () => {

    
    const {setLocationFinderResponse,locationFinderResponse,setLocationSelected, locationSelected, setQueryString,queryString  } = locationList()
    const { setCoords } = useLocation();
    const { setLocalWeather } = useLocalWeather();
    const { getForecast } = useForecast()

    const fetchLocationList = async (q:string) => {
        const res = await getLocations(q)
        setLocationFinderResponse(res)
    }
    const debouncedFetchLocationList = fetchLocationList;

    const selectedHandler = (value:string) =>{
        const filterlocation = locationFinderResponse.filter((location)=> location?.place_id === value);
        setLocationSelected(filterlocation[0])
        const latitude = parseFloat(filterlocation[0]?.lat || `${baseLocation.latitude}`);
        const longitude = parseFloat(filterlocation[0]?.lon || `${baseLocation.longitude}`);
        setCoords({latitude,longitude})
        getForecast(latitude,longitude)
        setLocationFinderResponse([])
        
        if(filterlocation.length > 0){
            
            // actualizamos la query string
            setQueryString(filterlocation[0]?.display_name||'');
            // actualizamos el clima en base a la localizacion seleccionada
            getWeather(filterlocation[0]?.lat||'',filterlocation[0]?.lon||'').then(data=>{
                
                setLocalWeather(data)
                // actualizamos la hora del reloj

            });


        }

    }

    useEffect(()=>{
        if(queryString.length>3 && locationSelected == null){
            debouncedFetchLocationList(queryString);
        }else{
            setLocationFinderResponse([])
            setLocationSelected(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[queryString])

    return {
        query:queryString, setQuery:setQueryString, selectedHandler
    }
}