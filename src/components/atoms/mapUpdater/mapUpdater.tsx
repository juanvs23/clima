'use client'
import React, { useEffect, useRef } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapUpdaterProps } from "@/src/types/weather";

// marker
export const MapUpdater: React.FC<MapUpdaterProps> = ({ center, markerPosition, makerData }) => {
  const map = useMap();
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  useEffect(() => {
    const marker = markerRef.current;
    if (marker) {
      marker.setLatLng(markerPosition);
    }
  }, [markerPosition]);

  return (
    <Marker position={markerPosition} icon={L.icon({ iconSize: [25, 41], iconAnchor: [12, 41], iconUrl: '/map-pin.svg', shadowUrl: '' })} ref={markerRef}>
      <Popup>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold" >{makerData?.name}, {makerData?.country}</h3>
          <p className="text-sm" style={{margin:0,marginBottom:'15px'}}>{makerData?.hour}</p>
          <p className="text-sm font-bold" style={{margin:0,marginBottom:'5px'}}>Temperature: {makerData?.temp}°C</p>
        </div>
      </Popup>
    </Marker>
  );
};