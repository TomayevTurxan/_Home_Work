import { BASE_URL } from "../base_url";
import axios from "axios";

export async function getAllAlboms (){
    let globalData;
    await axios.get(BASE_URL+'/alboms')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//Alboms get by ID
export async function getAlbomsByID (id){
    let globalData;
    await axios.get(BASE_URL+`/alboms/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//delete buttons
export async function deleteAlboms(id){
    let globalData;
    await axios.delete(BASE_URL+`/alboms/${id}`)
    .then((result) => { 
        console.log(result);
        globalData = result.data;
    })
    return globalData
}

//Alboms post
export async function postAlboms(payload){
    let newSlider;
    newSlider =  await axios.post(BASE_URL+`/alboms`,payload);

    return newSlider;
}

//Alboms put
export async function putAlbomsByID(id,payload){
    axios.put(BASE_URL+`/alboms/${id}`,payload);
}

//Alboms patch
export async function patchAlbomsByID(id,payload){
    axios.patch(BASE_URL+`/alboms/${id}`,payload);
}