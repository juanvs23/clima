import { Globe, Mail, Phone } from "lucide-react";
import TitleComponent from "../../atoms/titleComponent/titleComponent";
import Link from "next/link";

export default function ContactForm() {
    return(
        <div className="bg-white glassMorh  rounded-lg shadow-lg p-6 w-full  border border-gray-200">
            
            <div className="flex-col gap-2 md:flex justify-between items-center">
                <div className="w-full p-2 md:p-3">
                    <div className="mb-6">
                        <TitleComponent colorClass="text-primary" title="Contact" />
                        <h3 className="text-secondary mt-6 mb-4 text-2xl font-bold">Complete the form to contact us.</h3>
                        <ul className="space-y-3 flex-col gap-4 text-lg">
                            <li className="flex items-start gap-2">
                                <Globe size={16} className="h-5 w-5 text- mt-0.5" />
                                <a href="https://coltmandev.dev" className="text-secondary">https://coltmandev.dev</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-secondary" />
                                <a href="tel:+584248310009" className="text-secondary">+58 424 831 0009</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-secondary" />
                                <Link href="mailto:contact@coltmandev.dev" className="text-secondary hover:text-white transition-colors">
                                contact@coltmandev.dev
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}