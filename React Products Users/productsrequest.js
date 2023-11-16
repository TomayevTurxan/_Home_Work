import { BASE_URL } from "./url";
import axios from "axios";

export async function getAllProducts (){
    let globalData;
    await axios.get(BASE_URL+'/products')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//products get by ID
export async function getProductsByID (id){
    let globalData;
    await axios.get(BASE_URL+`/products/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//delete buttons
export async function deleteProducts(id){
    let globalData;
    await axios.delete(BASE_URL+`/products/${id}`)
    .then((result) => { 
        console.log(result);
        globalData = result.data;
    })
    return globalData
}

//products post
export async function postProducts(payload){
    let newSlider;
    newSlider =  await axios.post(BASE_URL+`/products`,payload);

    return newSlider;
}

//products put
export async function putProductsByID(id,payload){
    axios.put(BASE_URL+`/products/${id}`,payload);
}

//products patch
export async function patchProductsByID(id,payload){
    axios.patch(BASE_URL+`/products/${id}`,payload);
}