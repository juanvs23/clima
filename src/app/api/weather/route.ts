import { axiosIntanceCreator } from "@/src/utils/axiosIntanceCreator";
import { NextRequest, NextResponse } from "next/server";

export async function POST( request:NextRequest ){
    const {lat,lon,target} = await request.json();

    if(target ==='weather'){
        const url = `weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${process.env.REACT_WHEATER_KEY}`;
        const {data} = await axiosIntanceCreator(process.env.WHEATER_URL).get(url);
        return NextResponse.json(data,{status:200});
    }
    if(target ==='forecast'){
        const url = `forecast?lat=${lat}&lon=${lon}&cnt=9&units=metric&lang=es&appid=${process.env.REACT_WHEATER_KEY}`;
        const {data} = await axiosIntanceCreator(process.env.WHEATER_URL).get(url);
        return NextResponse.json(data,{status:200});
    }

    return NextResponse.json({"error":"The method don't was sending"},{status:404});
}