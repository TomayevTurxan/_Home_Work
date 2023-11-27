import axios from "axios";
import { BASE_URL } from "../base_url";

export async function getAllCategories() {
    let categories;
    await axios.get(`${BASE_URL}/categories`)
    .then((res)=>{
        categories = res.data;
    })

    return categories;
}

export async function getCategoryByID(id) {
    let category;
    await axios.get(`${BASE_URL}/categories/${id}`)
    .then((res)=>{
        category = res.data;
    })

    return category;
}

export async function postCategory(payload) {
    let newCategory;
    await axios.post(`${BASE_URL}/categories`,payload)
    .then((res)=>{
        newCategory = res.data;
    })

    return newCategory;
}