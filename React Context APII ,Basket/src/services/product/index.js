import axios from "axios";
import BASE_URL from "../BASE_URL";

//get all Products
export const getAllProducts = async()=>{
    let Products;
    await axios.get(`${BASE_URL}/Products`)
    .then((response)=>{
        Products = response.data;
    })
    return Products;
}

//get one Products (id)
export const getProductsByID = async(id)=>{
    let Products;
    await axios.get(`${BASE_URL}/Products/${id}`)
    .then((response)=>{
        Products = response.data;
    })
    return Products;
}

//post Products
export const postProducts = async(payload)=>{
    let newProducts;
    await axios.post(`${BASE_URL}/Products`,payload)
    .then((response)=>{
        newProducts = response.data;
    })
    return newProducts;
}