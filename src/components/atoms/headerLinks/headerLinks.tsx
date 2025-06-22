import { RouteItem } from "@/src/types/constants";
import Link from "next/link";

export default function HeaderLinks({links,isMobile,isTopColor}:{links:RouteItem[],isMobile:boolean,isTopColor:boolean}) {
    const mobileStyle = 'block px-3 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-md transition-colors duration-300';
    const desktopStyle = isTopColor? 'text-white hover:text-secondary transition-colors duration-300':'text-gray-100 hover:text-primary transition-colors duration-300';
    return (
        <>
        {links.map((link:RouteItem)=>( 
            <Link key={link.id}
                href={link.slug} 
                className={isMobile?mobileStyle:desktopStyle}
              >
                {link.title}
              </Link>))}
        </>
    )
}