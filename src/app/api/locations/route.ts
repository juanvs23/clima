import { axiosIntanceCreator } from "@/src/utils/axiosIntanceCreator";
import { NextRequest, NextResponse } from "next/server";

export async function POST( request:NextRequest ){
    const body = await request.json()
    
    const { query } = body;

    try {
        if(query !== '' && query.length > 2){
            console.log(query)
            //autocomplete?key=<Your_API_Access_Token>&q=&limit=5&dedupe=1
            const getIQLocation = await axiosIntanceCreator(process.env.LOCATION_QL_URL||'')
                .get(`autocomplete?key=${process.env.LOCATION_QL_TOKEN}&q=${query}&limit=10&dedupe=1`)
            return NextResponse.json(getIQLocation.data,{status:200});
        }
    } catch (error) {
        return NextResponse.json({error:error},{status:200});
    }
   
    return NextResponse.json({data:[]},{status:200});
}