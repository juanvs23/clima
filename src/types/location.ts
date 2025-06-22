
export interface LocationIq {
    placeID:     string;
    licence:     string;
    osmType:     string;
    osmID:       string;
    lat:         string;
    lon:         string;
    displayName: string;
    address:     Address;
    boundingbox: string[];
}

export interface Address {
    government?:    string;
    houseNumber?:   string;
    road?:          string;
    quarter?:       string;
    suburb?:        string;
    city:          string;
    stateDistrict?: string;
    state?:         string;
    postcode?:      string;
    country:       string;
    countryCode?:   string;
}
export interface Coordinates {
    latitude: number,
    longitude: number
}
export interface LocationSlice {
    coords:Coordinates,
    location: LocationIq;
    setLocation: (location: LocationIq) => void;
    setCoords: (coords: Coordinates) => void;  
}
export type LocationFinderResponse = LocationFinderInterface | null 

export interface LocationFinderInterface {
    place_id: string;
    osm_id: string;
    osm_type: string;
    licence: string;
    lat: string;
    lon: string;
    boundingbox: string[];
    class: string;
    type: string;
    display_name: string;
    display_place: string;
    display_address: string;
    address: {
        name: string;
        county: string;
        state: string;
        country: string;
        country_code: string;
    }
}

export interface LocationFinderResponseSlice{
    locationFinderResponse: LocationFinderResponse[] | [];
    locationSelected: LocationFinderResponse| null;
    queryString: string;
    setQueryString: (queryString: string) => void;
    setLocationSelected: (location: LocationFinderResponse) => void;
    setLocationFinderResponse: (location: LocationFinderResponse[]) => void;
}