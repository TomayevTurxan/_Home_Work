import { BASE_URL } from "./url.js";
let mealsDetail = document.querySelector(".meals-detail")
let id = new URLSearchParams(location.search).get("id")
console.log(id);

axios.get(BASE_URL+`/meals/${id}`)
.then((result)=>{
    let card = result.data
    mealsDetail.innerHTML= `
    <div class="col-3 mt-3 mr-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top"
            src="${card.imageLink}"
            alt="${card.name}">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-price">${card.price}</p>
            <div class="detail d-flex">
            <a  href="mealsDetail.html?id=${card.id}" class="btn btn-primary">Detail</a>
            <button type="button" class="btn btn-outline-danger delete-btn"><i
            class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
</div>
      `
})