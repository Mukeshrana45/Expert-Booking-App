//import axios from "axios";
import { API_PATH, BASE_URL } from "./constant"
import { expertsData } from "../components/appContent";



export const fetchExperts= async()=>{
    const url =BASE_URL + API_PATH.EXPERTS;

   // const {data} = await axios.get(url);
    //return data;
    return expertsData;
}
export const fetchExpertsById= async(id)=>{
    const url =BASE_URL + API_PATH.EXPERTS;

   // const {data} = await axios.get(url);
    //return data;
    return expertsData?.find((item)=> item.id===id);
}


