import { aboutText } from "@/src/constants/proyects"
import TitleComponent from "../../atoms/titleComponent/titleComponent"

export  const AboutComponent = () => {
return(
    <section  id="about" className="px-4 pt-[80px] ">
        <div className="container  mx-auto">
          <TitleComponent colorClass="text-primary" title="About"/>
          <div className="text-primary mt-4 text-lg" dangerouslySetInnerHTML={{__html: aboutText}} />

        </div>
    </section>
)
}