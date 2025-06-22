import { AboutComponent } from "../organisms/aboutComponent/aboutComponent";
import Banner from "../organisms/Banner/Banner";
import { ContactComponent } from "../organisms/contactComponent/contactComponent";
import ForeCast from "../organisms/forecast/forecast";
import WheatherMapComponent from "../organisms/WheatherMapComponent/WheatherMapComponent";
import PageTemplateLayout from "../templates/layout";


export default function HomePage() {
  return (
  <PageTemplateLayout >
    <Banner />
    <ForeCast/>
   {
    typeof window !== undefined && <WheatherMapComponent />
   }
    <AboutComponent/>
    <ContactComponent/>
  </PageTemplateLayout>
  )
}