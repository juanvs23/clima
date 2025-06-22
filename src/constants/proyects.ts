import { RouteItem } from "../types/constants";

export const proyectosLink: RouteItem[] =[
    { id: 1, name: 'restaurant-gericht', title: 'Restaurant - Gericht', slug: 'https://restaurant.coltmandev.dev/', target: true },
    {id: 2, name: 'quotes-generator', title: 'Quotes Generator', slug: 'https://projects.coltmandev.dev/quotes-generator/',target: true },
    {id: 3, name: 'product-book', title: 'Product Book', slug: 'https://projects.coltmandev.dev/product-book/',target: true },
    {id: 4, name: 'news-app', title: 'News App', slug:'https://news-app-sage-theta.vercel.app/' , target: true}
] ;

import { Metadata } from "next";

export const metadataConstants:Metadata = {
    authors: {
        url:'https://coltmandev.dev',
        name: 'Juan Carlos Avila Pérez'
    },
    icons:{
        icon:[
            {url:'/isotipo.webp',type: 'image/webp'}
        ]
    }

}
export const headerLinks: RouteItem[] = [
    {id: 1, name: 'home', title: 'Home', slug:'/#banner' , target: false},
    {id: 2, name: 'forecast', title: 'Forecast', slug:'#forecast', target: false},
    {id: 3, name: 'weather-maps', title: 'Weather Maps', slug:'#maps', target: false},
    {id: 4, name: 'about', title: 'About', slug:'#about', target: false},
    {id: 5, name: 'contact', title: 'Contact', slug:'#contact', target: false},


]
export const aboutText =`<p class="mb-4">Esta aplicación web te permite consultar el clima actual y acceder a estadísticas meteorológicas de cualquier lugar del mundo de forma rápida y visual. El proyecto está desarrollado con tecnologías modernas como React, Next.js y TypeScript, lo que garantiza una experiencia fluida, segura y eficiente.</p>

<p class="mb-4">Utilizamos Leaflet para mostrar mapas interactivos, permitiéndote explorar diferentes ubicaciones de manera intuitiva. Los datos meteorológicos provienen de la API de OpenWeather, asegurando información precisa y actualizada sobre temperatura, humedad, viento y más. Además, la función de geolocalización te permite obtener el clima de tu ubicación actual con un solo clic.</p>

<p class="mb-4">Nuestro objetivo es ofrecerte una herramienta sencilla, visual y confiable para que siempre estés informado sobre el clima y sus tendencias estadísticas, ya sea para planificar tu día o analizar patrones meteorológicos.</p>`
export const InfoCurrenTime = {
    DEAFULT:{
        start: 0,
        end: 0,
        bannerInfo:{
            banner: '',
            greeting: 'Buenos días',
        }
    },
    SUNRISE : {
        start: 6,
        end: 9,
        bannerInfo:{
            banner: '/images/sunrise.webp',
            greeting: 'Buenos días',
        }
    },
    MORNING :{
        start: 9,
        end: 12,
        bannerInfo:{
            banner: '/images/sky.webp',
            greeting: 'Buenos días',
        }
    },
    EVENING:{
        start: 12,
        end: 17,
        bannerInfo:{
            banner: '/images/sky.webp',
            greeting: 'Buenas tardes',
        }
    },
    SUNSET:{
        start: 17,
        end: 19,
        bannerInfo:{
            banner: '/images/sunset.webp',
            greeting: 'Buenas tardes',
        }
    },
    NIGHT:{
        start: 19,
        end: 6,
        bannerInfo:{
            banner: '/images/night.webp',
            greeting: 'Buenas noches',
        }
    }

}

export const baseLocation =  {
    latitude: 10.48801,
    longitude: -66.87919
}