import { WeatherCord, WeatherResponse } from "./weather";

export interface ForeCastInterface {
    cod:     string;
    message: number;
    cnt:     number;
    list:    WeatherResponse[];
    city:    City;
}

export interface City {
    id:         number;
    name:       string;
    coord:      WeatherCord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}


export interface ForeCastGraphicInterface {
    city: City;
    timeLine: string|number[][]
}