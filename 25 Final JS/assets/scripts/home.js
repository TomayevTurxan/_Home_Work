import { BASE_URL } from "./url.js";
let singersWrapper = document.querySelector(".singer-wrapper");
let inpSearch = document.querySelector("#search");
let sortByName = document.querySelector("#sortByName");
let whishListCount = document.querySelector(".whishListCount")
let singers = [];
axios.get(BASE_URL + `/rappers`).then((result) => {
  try {
    singers = result.data;
    singers.forEach((card) => {
      singersWrapper.innerHTML += `
        <div class="col-3 mt-3 mr-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top"
                src="${card.imagelink}"
                alt="${card.name}">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-age">${card.age}</p>
                <p class="card-nationality">Nationality: ${card.nationality}</p>
                <p class="card-genre">Genre: ${card.genre}</p>
                <div class="detail d-flex">
                <a href="detail.html?id=${card.id}"  class="btn btn-primary">Detail</a>
                <button type="button" class="btn btn-outline-danger delete-btn"><i
                class="fa-solid fa-trash"></i></button>
                <button id=${card.id} type="button" class="btn btn-outline-danger heart-button"><i class="fa-regular fa-heart"></i></button>
                <button  type="button" class="btn btn-outline-danger d-none"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>
    </div>
        `;

      let deleteButtons = document.querySelectorAll(".delete-btn");
      deleteButtons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              //UI remove
              this.parentElement.parentElement.parentElement.remove();

              //db.json remove etmek
              axios.delete(BASE_URL + `/rappers/${card.id}`);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        });
      });

      let heartButtons = document.querySelectorAll(".heart-button")
      heartButtons.forEach(btn => {
        btn.addEventListener("click",function(e){
            e.target.classList.toggle("active");
            if (e.target.classList.contains("active")) {
                e.target.innerHTML = '<i class="fa-solid fa-heart"></i>';
                if (!JSON.parse(localStorage.getItem("cart"))) {
                    localStorage.setItem("cart",JSON.stringify([{id:this.id,quantity:1}]))
                }else{
                    let prevCart = JSON.parse(localStorage.getItem("cart"))
                    let found = prevCart.find((x)=>x.id == this.id)
                    if (found) {
                        found.quantity++
                        localStorage.setItem("cart",JSON.stringify([...prevCart]))
                        whishListCount.textContent = JSON.parse(localStorage.getItem("cart")).length
                    }else{
                        let prevCart = JSON.parse(localStorage.getItem("cart"))
                        let currentSinger = {
                            id: this.id,
                            quantity:1,
                        } 
                        localStorage.setItem("cart",JSON.stringify([...prevCart,currentSinger]))
                        whishListCount.textContent = JSON.parse(localStorage.getItem("cart")).length
                    }
                }
            }else{
                e.target.innerHTML = '<i class="fa-regular fa-heart"></i>';
            }
        })
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//WhishListCount sayinin artmasi
whishListCount.textContent = JSON.parse(localStorage.getItem("cart")).length

//input search
inpSearch.addEventListener("keyup", function () {
  renderSingers(singers);
});

//sort due to name
sortByName.addEventListener("click", function () {
  singers.sort((a, b) => a.name.localeCompare(b.name));
  renderSingers(singers);
});


//RenderSingers
function renderSingers(arr) {
  singersWrapper.innerHTML = "";
  arr.forEach((card) => {
    if (card.name.toLowerCase().includes(inpSearch.value.toLowerCase())) {
      singersWrapper.innerHTML += `
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
                    <a href="#" class="btn btn-primary">Detail</a>
                    <button type="button" class="btn btn-outline-danger"><i
                            class="fa-solid fa-trash"></i></button>
                    <button type="button" class="btn btn-outline-danger"><i
                            class="fa-regular fa-heart"></i><i
                            class="fa-solid fa-heart d-none"></i></button>
                </div>
            </div>
        </div>
            `;
    }
  });
}
