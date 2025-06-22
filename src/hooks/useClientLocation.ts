'use client'

import { useEffect } from "react";
import getClientLocation from '../utils/getCLientLocation';
import { axiosLocation } from "../services/axiosLocation";
import { useLocation } from "../context/zustand/location";


export default function useCLientLocation(){


    const { setLocation, location,setCoords,coords } = useLocation();

    const locationData = async(lat:number,lon:number)=>{
        const data  = await  axiosLocation(lat,lon,'reverse');
        setLocation(data);
    }
   

    useEffect( ()=>{
     if(window !== undefined){ 
        getClientLocation().then( (res)=>{
            setCoords({latitude:res.latitude,longitude:res.longitude})
            locationData(res.latitude,res.longitude)
        }).catch( (err)=>{
            console.log(err,'error')
            setCoords({latitude:err.latitude,longitude:err.longitude})
            locationData(err.latitude,err.longitude)
        });
     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    return { location,coords,setCoords }
}