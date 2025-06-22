'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../molecules/nabar/navbar";

export default function Header(){
    const [top,setTop] =useState<number>(-200)
    const handleScroll = () => {
        const element = document.getElementById('top-header')!;
        if (window.scrollY > 300) {
          element.classList.add('bg-primary');
         
          setTop(0)
        } else {
            setTop(-200)
            element.classList.remove('bg-primary');
           
        }
      };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        };
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <>
            <header id="top-header" className="top-0 z-10 fixed left-0 w-full px-3.5 py-2 bg-primary" style={{top:`${top}px`,zIndex:99999}}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="text-white text-2xl font-bold">
                                <Link href="#banner">
                                    <Image className="img-responsive" src="/logo-white.webp" alt="Logo" width={120} height={80} />
                                </Link>
                            </div>
                        </div>
                        <Navbar isTop={true}/>
                    </div>
                </div>
            </header>
            <header id="header" className="z-10 top-0 left-0 w-full px-3.5 py-2 bg-transparent absolute" style={{zIndex:300}}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="text-white text-2xl font-bold">
                                <Link href="/#banner">
                                    <Image className="img-responsive" src="/logo-1.webp" alt="Logo" width={120} height={80} />
                                </Link>
                            </div>
                        </div>
                        <Navbar isTop={false} />
                    </div>
                </div>
            </header>
        </>
    )
}