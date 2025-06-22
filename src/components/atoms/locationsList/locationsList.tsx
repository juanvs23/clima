import { locationList } from "@/src/context/zustand/locationList"
import { useLocationList } from "@/src/hooks/useLocationList"


export default function LocationsList() {
    const { locationFinderResponse, locationSelected } = locationList()
    const { selectedHandler } = useLocationList()
  return locationFinderResponse.length>0 && locationSelected === null ? (
    <div className="relative w-full">
        <div className="z-20 absolute top-[100%] w-full focus:outline-0 focus:border-primary-700 bg-primary-400  border-2 rounded-lg border-primary-300 px-5 text-2xl">
        <h3>
            lista de ubicaciones
        </h3>
        <ul className="max-h-[150px] overflow-y-auto ">
            {locationFinderResponse.map((location ) => (
                <li key={location?.place_id} className="p-3 text-lg text-white ">
                    <button className="w-full text-left cursor-pointer hover:text-secondary duration-300" onClick={()=>selectedHandler(location?.place_id|| '') }>
                    {location?.display_name}
                    </button>
                </li>
            ))}
        </ul>
    </div>
    </div>
  ):null
}