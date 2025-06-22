import TitleComponent from "../../atoms/titleComponent/titleComponent";
import ForeCastCarousel from "../../molecules/foreCastCarousel/foreCastCarousel";
import { ForeCastComponent } from "../../molecules/ForeCastComponent/ForeCastComponent";

export default function ForeCast(){
    
    return(
        <section  id="forecast" className="px-4 flex flex-col pt-[80px] gap-4">
            <div className="container flex-col gap-3 mx-auto">
            <TitleComponent colorClass="text-primary" title="Forecast"/>
            <ForeCastComponent/>
            <ForeCastCarousel/>
            </div>
        </section>
    )
}