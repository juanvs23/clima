import { axiosIntanceCreator } from "../utils/axiosIntanceCreator";

export async function getWheatherByCity(lat:string,lon:string){
    const url = `weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${process.env.REACT_WHEATER_KEY}`;
    const {data} = await axiosIntanceCreator(process.env.WHEATER_URL).get(url);
    return data; 
}