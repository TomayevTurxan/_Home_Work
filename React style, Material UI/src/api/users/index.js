import { BASE_URL } from "../base_url";
import axios from "axios";

export async function getAllUsers (){
    let globalData;
    await axios.get(BASE_URL+'/users')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//Users get by ID
export async function getUsersByID (id){
    let globalData;
    await axios.get(BASE_URL+`/users/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//delete buttons
export async function deleteUsers(id){
    let globalData;
    await axios.delete(BASE_URL+`/users/${id}`)
    .then((result) => { 
        console.log(result);
        globalData = result.data;
    })
    return globalData
}

//Users post
export async function postUsers(payload){
    let newSlider;
    newSlider =  await axios.post(BASE_URL+`/users`,payload);

    return newSlider;
}

//Users put
export async function putUsersByID(id,payload){
    axios.put(BASE_URL+`/users/${id}`,payload);
}

//Users patch
export async function patchUsersByID(id,payload){
    axios.patch(BASE_URL+`/users/${id}`,payload);
}