import { BASE_URL } from "./url.js";
let singerDetail = document.querySelector(".singer-detail")
let id = new URLSearchParams(location.search).get("id")
console.log(id);

axios.get(BASE_URL+`/rappers/${id}`)
.then((result)=>{
    let card = result.data
    singerDetail.innerHTML= `
        <div class="col-3 mt-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top"
                src="${card.imagelink}"
                alt="${card.name}">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-age">${card.age}</p>
                <p class="card-nationality">Nationality: ${card.nationality}</p>
                <p class="card-genre">Genre: ${card.genre}</p>
                <a href="detail.html?id=${card.id}"  class="btn btn-primary">Detail</a>
                <button type="button" class="btn btn-outline-danger"><i
                        class="fa-solid fa-trash"></i></button>
                <button type="button" class="btn btn-outline-danger"><i
                        class="fa-regular fa-heart"></i><i
                        class="fa-solid fa-heart d-none"></i></button>
            </div>
        </div>
    </div>
        `
})