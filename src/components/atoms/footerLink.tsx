import { LinkItem } from "@/src/types/constants";
import Link from "next/link";




export default function FooterLink({title,slug,target}:LinkItem) {
    const isExternalLink = target === true? <a href={slug} className="text-white hover:text-primary-500 transition-colors" target="_blank">{title}</a>: <Link className="text-white hover:text-primary-500 transition-colors" href={slug}>{title}</Link>;
return (
    <li>{isExternalLink}</li>
)
}