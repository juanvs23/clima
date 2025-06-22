import { axiosIntanceCreator } from "../utils/axiosIntanceCreator";

export  const getWeather = async (lat:string,lon:string,target='weather')=>{
    const weather = await axiosIntanceCreator().post('/weather',{lat,lon,target});
    return weather.data;
}