import { ForeCastGraphicInterface, ForeCastInterface } from "./forCast";
import  { LatLngExpression } from 'leaflet';

export interface WeatherCord {
    lon: number;
    lat: number;
  };

export interface WeatherInterface {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }
  export interface WindInterface  {
    speed: number;
    deg: number;
  }
export interface WeatherResponse {
  coord?: WeatherCord
  weather?: WeatherInterface[];
  base?: string;
  main?:WeatherMain;
  visibility?: number;
  wind?: {
    speed: number;
    deg: number;
  };
  rain?: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt_txt?: string;
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface WeatherSlice{
    localWeather:WeatherResponse|null;
    forecastWeather:ForeCastInterface|null;
    forecastGraph:ForeCastGraphicInterface|null;
}
export interface UseLocalWeatherSlice extends WeatherSlice{
    setForecastWeather:(forecast:ForeCastInterface)=>void;
    setForecastGraph:(graph:ForeCastGraphicInterface)=>void;
    setLocalWeather:(weather:WeatherResponse)=>void;
}

export interface MapUpdaterProps {
  center: LatLngExpression;
  markerPosition: LatLngExpression;
  makerData?:{
    name: string;
    country: string;
    temp: number;
    hour: string;
  }
}