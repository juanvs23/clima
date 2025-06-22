import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export const axiosIntanceCreator = (base:string='/api'):AxiosInstance=>{

    const options:AxiosRequestConfig ={
        baseURL: base,
        timeout:5000,
        headers: {
            'Content-Type': 'application/json',
        },
        signal: new AbortController().signal,

    }
    const axiosInstance = axios.create(options);
    // interceptors
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            // Create ASCII art error logo
            console.log(`
    ███████╗██████╗ ██████╗  ██████╗ ██████╗ 
    ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
    █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
    ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
    ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
    `);
            console.log('Error details:', error.message);
            return Promise.reject(error);
        }
    );
    return axiosInstance

}