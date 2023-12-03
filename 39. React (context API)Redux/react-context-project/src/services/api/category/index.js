import axios from "axios";
import BASE_URL from "../BASE_URL";

//get all categories
export const getAllCategories = async()=>{
    let categories;
    await axios.get(`${BASE_URL}/categories`)
    .then((response)=>{
        categories = response.data;
    })
    return categories;
}

//get one category (id)
export const getCategoryByID = async(id)=>{
    let category;
    await axios.get(`${BASE_URL}/categories/${id}`)
    .then((response)=>{
        category = response.data;
    })
    return category;
}

//post category
export const postCategory = async(payload)=>{
    let newCategory;
    await axios.post(`${BASE_URL}/categories`,payload)
    .then((response)=>{
        newCategory = response.data;
    })
    return newCategory;
}
