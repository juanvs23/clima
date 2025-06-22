import { Host_Grotesk } from "next/font/google";
import "../assets/styles/globals.css";
import { Metadata } from "next";
import { metadataConstants } from "../constants/proyects";
import '../assets/styles/libs/owfont-master/css/owfont-regular.css'


const grotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  weight: ["300","400", "500", "600", "700"],
  display: "swap",
})
export const metadata: Metadata = {
  ...metadataConstants,
  title: "Clima App",
  description: "Mire el clima de su ciudad y de cualquier otra ciudad del mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
