import { axiosIntanceCreator } from "../utils/axiosIntanceCreator";

export const axiosLocation = async(lat:number,lon:number,method:string)=>{
    const {data} = await axiosIntanceCreator().post('/location',{
        latitude: lat,
        longitude: lon,
        method
    });
    return data;
} 