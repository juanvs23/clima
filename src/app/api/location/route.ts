import { axiosIntanceCreator } from "@/src/utils/axiosIntanceCreator";
import { NextRequest, NextResponse } from "next/server";

export async function POST( request:NextRequest ){
    const body = await request.json()
    const method = body.method || '';
    const { latitude, longitude } = body;
    if(method === 'reverse'){
        const getIQLocation = await axiosIntanceCreator(process.env.LOCATION_QL_URL||'')
            .get(`reverse?key=${process.env.LOCATION_QL_TOKEN}&lat=${latitude}&lon=${longitude}&format=json`)
        return NextResponse.json(getIQLocation.data,{status:200});
    }
    if (method === 'direct') {
        const getIQLocation = await axiosIntanceCreator(process.env.LOCATION_QL_URL||'')
           .get(`search?key=${process.env.LOCATION_QL_TOKEN}&q=${latitude},${longitude}&format=json`)
        return NextResponse.json(getIQLocation.data,{status:200});
    }
   
    return NextResponse.json({"error":"The method don't was sending"},{status:404});
}