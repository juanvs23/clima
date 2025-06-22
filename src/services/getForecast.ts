import { axiosIntanceCreator } from "../utils/axiosIntanceCreator";

export async function getForecast(lat:string,lon:string) {
    const baseUrl = `${process.env.WEATHER_URL}`;

    const getForecast = await axiosIntanceCreator(baseUrl)
    .get(`forecast?lat=${lat}&lon=${lon}&cnt=6&units=metric&appid=${process.env.REACT_WHEATER_KEY}`);

   return getForecast.data;
}