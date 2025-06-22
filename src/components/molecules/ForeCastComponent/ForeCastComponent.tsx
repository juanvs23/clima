'use client';

import useForecast from "@/src/hooks/useForecast";
import Chart from "react-google-charts";
import SkelentonGraph from "../../atoms/skelentongraph/skelentongraph";


export function ForeCastComponent() {
    const {forecastGraph} = useForecast()
    const options = {
        title: "Temperature Forecast for the Next 24 Hours",
        curveType: "function",
        backgroundColor: "transparent",
        legend: { position: "bottom" },
        pointSize: 10,
        series: {
            0: { color: "#3498db" },
            1: { color: "#e74c3c" },
          },
          isStacked: false,
        vAxis: {
            title: "Time (hours)",

          },
          hAxis: {
            title: "Temperature °C / Speed Wind km/h",

          },
          tooltip: { isHtml: true },
          animation: {
            duration: 1000,
            easing: "out",
          },
    };
    
    return (
    <div className="mt-6 glassMorh p-4 mb-4 rounded-lg shadow-lg">
      {        
        forecastGraph !== null ? (
            <>
              <Chart
             chartType="ComboChart"
            width="100%"
            height="400px"
            data={forecastGraph.timeLine}
            options={options}
            />
      <p className="text-secondary text-xl">
        Forecast for the next 24 Hours: {forecastGraph.city.name}
      </p>
            </>
        ):(
           <SkelentonGraph />
        )
      }
    </div>
  );
}