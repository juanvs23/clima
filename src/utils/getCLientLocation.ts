import { baseLocation } from "../constants/proyects"

export default function getClientLocation():Promise<{latitude: number, longitude: number}>{
    const location = baseLocation;
    return new Promise( (resolve, reject)=>{
        navigator.geolocation.getCurrentPosition( (res)=>{
          //  console.log(res)
            resolve({
                latitude: res.coords.latitude,
                longitude: res.coords.longitude
            })
        }, (err)=>{
            reject(location)
            console.log(err)
            resolve(location)
        },{
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        })
    })
}