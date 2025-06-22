import { Facebook, Github, Globe, Linkedin, Mail, Phone} from "lucide-react";
import Link from "next/link";
import FooterCol from "../molecules/footerCol/footerCol";
import { proyectosLink } from "@/src/constants/proyects";
import Image from "next/image";
import LogoFooter from "../../../public/logo-1.webp"

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Sección 1: Información de la empresa */}
          <div className="space-y-4">
            <Image
            src={LogoFooter.src}
            width={LogoFooter.width}
            height={LogoFooter.height}
            alt="Logo"
            className="h-10 w-auto"
            />
            <p className="text-sm text-white">
              Proyecto para una aplicación web que te permite ver el clima de tu ciudad y de cualquier otra ciudad del mundo.
            </p>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="space-y-4">
            
           
          </div>
          <FooterCol title="Otros Preyectos" groupLinks={proyectosLink} />

          {/* Sección 3: Servicios */}

          {/* Sección 4: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Globe size={16} className="h-5 w-5 text-white mt-0.5" />
                <a href="https://coltmandev.dev" className="text-white">https://coltmandev.dev</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" />
                <a href="tel:+584248310009" className="text-white">+58 424 831 0009</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white" />
                <Link href="mailto:contact@coltmandev.dev" className="text-white hover:text-white transition-colors">
                contact@coltmandev.dev
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              {/* Iconos de redes sociales */}
              <a
                target="_blank"
                href="https://www.facebook.com/juancarlos.avila.1420"
                className="h-8 w-8 rounded-full bg-secondary border-1 border-white flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={16} />
              </a>
              <a href="https://github.com/juanvs23"
                target="_blank"
                className="h-8 w-8 rounded-full bg-secondary border-1 border-white flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">Github</span>
                <Github size={16} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juanvs23/"
                className="h-8 w-8 rounded-full bg-secondary border-1 border-white flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary  text-center text-sm text-white">
          <p>© {new Date().getFullYear()} Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}