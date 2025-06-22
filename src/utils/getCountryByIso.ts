import countries from "i18n-iso-countries";
import "i18n-iso-countries/langs/es.json"; // Registra español



export function getCountryByIso(iso: string): string {
  // Asegúrate de que el país esté registrado
 
  // Obtiene el nombre del país en español
  const countryName = countries.getName(iso, "es");
  
  return countryName || "País no encontrado";
}