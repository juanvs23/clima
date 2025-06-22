'use client'


import Image from "next/image"
import TimeComponent from "../../atoms/timeComponent/timeComponent";
import WheaterComponent from "../../molecules/wheaterComponent/wheaterComponent";
import SearchBar from "../../atoms/searchBar/searchBar";
import { useTimeComponent } from "@/src/hooks/useTimeComponent";


const Banner = () => {
  const{bannerUrl,currentGreeting}  = useTimeComponent();
  return (
  <header id="banner" className="min-h-[70vh] md:min-h-[60vh] relative overflow-hidden">
    <div className="absolute px-3 py-8 flex justify-center items-center h-[100%] w-full top-0 left-0 z-10" style={{background:'rgba(0, 0, 0, 0.3)'}}>
      <SearchBar/>
      <TimeComponent/>
      <WheaterComponent />
    </div>
    {bannerUrl !== '' && (<Image
      fetchPriority="high"
      priority={true}
      loading="eager"
      height={1920}
      sizes="(max-width: 1920px) 100vw, 33vw"
      width={700}  
      src={bannerUrl} 
      alt={currentGreeting}
      className="absolute top-0 left-0 w-full object-cover min-h-[70vh] md:min-h-[60vh]" />)
    }
  </header>
  )
}


export default Banner