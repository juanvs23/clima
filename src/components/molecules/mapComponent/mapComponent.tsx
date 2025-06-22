'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import  { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useLocalWeather } from '@/src/context/zustand/uselocalWeather';
import { MapUpdater } from '../../atoms/mapUpdater/mapUpdater';
import { useTimeComponent } from '@/src/hooks/useTimeComponent';



export default function MapComponent() {
    const { localWeather } = useLocalWeather()

    console.log(localWeather);
    
    // get de local Hour 
    const {dataClock:{newHour,newMinute,meridiem}} = useTimeComponent()


    const localWeatherLocation = localWeather?.coord;
    
    const center: LatLngExpression = [localWeatherLocation?.lat || 0, localWeatherLocation?.lon || 0];
    const markerPosition: LatLngExpression = [localWeatherLocation?.lat || 0, localWeatherLocation?.lon || 0];

    if (localWeatherLocation === undefined) {
        return (
            <div className="container mx-auto">
                <p className="text-center text-gray-500">Loading map...</p>
            </div>
        );
    }
    return (
        
            <div className="container mx-auto mt-6 ">
              {
                window !== undefined && (
                      <MapContainer
                    center={[localWeatherLocation.lat, localWeatherLocation.lon]}
                    preferCanvas={true}
                    zoom={13}
                    scrollWheelZoom={true}
                    className="w-full h-[500px] rounded-lg shadow-lg"
                >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapUpdater center={center} makerData={{
                      name: localWeather?.name || 'Unknown',
                      country: localWeather?.sys?.country || 'Unknown',
                      temp: localWeather?.main?.temp || 0,
                      hour: `${newHour}:${newMinute} ${meridiem}`,
                    }} markerPosition={markerPosition}  />
                </MapContainer>
                )
              }
            </div>
        
    );
}