import { Metadata } from "next";
import HomePage from "../components/pages/homePage";
import { metadataConstants } from "../constants/proyects";



export const metadata: Metadata = {
  ...metadataConstants,
  title: "Clima App",
  description: "Mire el clima de su ciudad y de cualquier otra ciudad del mundo",
};


export default function Home() {
  return <HomePage />
}
