'use client';
import dynamic from 'next/dynamic'
import TitleComponent from "../../atoms/titleComponent/titleComponent";


const Map = dynamic(() => import('../../molecules/mapComponent/mapComponent'), { ssr: false })


export default function WheatherMapComponent() {
return(
    <section  id="maps" className="px-4 pt-[80px] ">
        <div className="container  mx-auto">
            <TitleComponent colorClass="text-primary" title="Our map"/>
            { typeof window !== undefined  && <Map/>}
        </div>
    </section>
)
}