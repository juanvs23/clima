import { axiosIntanceCreator } from "../utils/axiosIntanceCreator";

export async function getLocations(query: string='ca') {
    //https://api.locationiq.com/v1/autocomplete?key=<Your_API_Access_Token>&q=&limit=5&dedupe=1
  const {data} =await axiosIntanceCreator().post('/locations',{
    query
  });
  return data;
}