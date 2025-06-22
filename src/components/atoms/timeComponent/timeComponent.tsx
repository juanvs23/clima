'use client'
import { useTimeComponent } from "../../../hooks/useTimeComponent"
import SkeletonDate from "../skelentonDate/skeletonDate"
import SkeletonTimer from "../skeletonTimer/skeletonTimer"
import style from "./timeComponent.module.css"  

export default function TimeComponent() {
    const {dataClock:{newHour,newMinute,meridiem},date} = useTimeComponent()
    
    return (
        <div className={`flex items-center flex-col justify-center gap-0  text-white font-semibold rounded-lg py-2 px-3 font-digital glassMorh ${style.clockLocation}`}>
           {
            date ===''?(
               <>
                 <SkeletonTimer/>
                 <SkeletonDate/>
               </>
            ):(
                <>
                <div className="innerClock text-4xl md:text-5xl xl:text-6xl">
                    <span>{`${newHour}`}</span>
                    <span>:</span>
                    <span>{`${newMinute}`}</span>
                    <span>{meridiem}</span>
                </div>
                 <h2 className="text-[10px] md:text-sm lg:text-base">
                 {date}
                </h2>
                </>
            )
           } 
          
        </div>
    )
}