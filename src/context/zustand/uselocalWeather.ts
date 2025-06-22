import { ForeCastGraphicInterface, ForeCastInterface } from '@/src/types/forCast';
import { UseLocalWeatherSlice, WeatherResponse } from '@/src/types/weather';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';




export const useLocalWeather = createWithEqualityFn<UseLocalWeatherSlice, [["zustand/devtools", never]]>(
   devtools( (set) => ({
    localWeather: {
        coord: {
            lon: -66.8792,
            lat: 10.488
        },
        weather: [
            {
                id: 803,
                main: "Clouds",
                description: "muy nuboso",
                icon: "04d"
            }
        ],
        base: "stations",
        main: {
            temp: '',
            feels_like: 23.79,
            temp_min: 23.67,
            temp_max: 23.67,
            pressure: 1013,
            humidity: 65,
            sea_level: 1013,
            grnd_level: 896
        },
        visibility: 10000,
        wind: {
            speed: 5.14,
            deg: 70
        },
        clouds: {
            all: 76
        },
        dt: 0,
        sys: {
            type: 1,
            id: 8759,
            country: "CL",
            sunrise: 1747908294,
            sunset: 1747953829
        },
        timezone: -14400,
        id: 3646738,
        name: "",
        cod: 200
    },
    forecastWeather: null,
    forecastGraph :null,
    setForecastGraph: (graph:ForeCastGraphicInterface) => set({ forecastGraph: graph }),
    setForecastWeather: (weather:ForeCastInterface) => set({ forecastWeather: weather }),
    setLocalWeather: (weather:WeatherResponse) => set({ localWeather: weather }),
})));