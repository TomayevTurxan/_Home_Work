import { BASE_URL } from "./url.js";
let mealsWrapper = document.querySelector(".meal-wrapper");
let inpSearch = document.querySelector("#search");
let sortByName = document.querySelector("#sortByName");
let basketListCount = document.querySelector(".basketListCount");
console.log(basketListCount);
// let whishListCount = document.querySelector(".whishListCount")
let meals = [];
axios.get(BASE_URL+`/meals`).then((result) => {
  try {
    meals = result.data;
    meals.forEach((card) => {
        console.log(card);
      mealsWrapper.innerHTML += `
      <div class="col-xl-3 col-lg-4 mt-3 mr-3">
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
              <button id=${card.id} type="button" class="btn btn-info btn-basket"><i class="fa-solid fa-cart-shopping"></i></button>
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
              axios.delete(BASE_URL + `/meals/${card.id}`);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        });
      });

      let basketButtons = document.querySelectorAll(".btn-basket")
      let arr = []
      if (JSON.parse(localStorage.getItem("basket"))) {
        arr = JSON.parse(localStorage.getItem("basket"))
      }
      basketButtons.forEach(btn => {
        btn.addEventListener("click",function(){
          // if (!JSON.parse(localStorage.getItem("basket"))) {
          //     localStorage.setItem("basket",JSON.stringify([{id:this.id}]))
          // }else{
          //   let basketLocal = JSON.parse(localStorage.getItem("basket"))
          //   let found = basketLocal.find((x)=>x.id == this.id)
          //   if (found) {
          //     found.quantity = found.quantity+1
          //     localStorage.setItem("basket",JSON.stringify([{id:this.id,quantity:1}]))
          //   }else{
          //     localStorage.setItem("basket",JSON.stringify([...basketLocal,{id:this.id,quantity:1}]))
          //   }
          // }
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your meal has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          if (arr.find((x)=>x.id == this.id)) {
            let elem = arr.find((x)=>x.id == this.id)
            elem.count = elem.count+1
            localStorage.setItem("basket",JSON.stringify(arr))
            basketListCount.textContent = JSON.parse(localStorage.getItem("basket")).length;

          }else{
            let obj = {id:this.id,count:1}
            arr.push(obj)
            localStorage.setItem("basket",JSON.stringify(arr))
            basketListCount.textContent = JSON.parse(localStorage.getItem("basket")).length;

          }
        })
      });

    });
  } catch (error) {
    console.log(error);
  }
});
//WhishListCount sayinin artmasi

//input search
inpSearch.addEventListener("keyup", function () {
  renderMeals(meals);
});

//sort due to name
sortByName.addEventListener("click", function () {
  meals.sort((a, b) => a.name.localeCompare(b.name));
  renderMeals(meals);
});


//Rendermeals
function renderMeals(arr) {
  mealsWrapper.innerHTML = "";
  arr.forEach((card) => {
    if (card.name.toLowerCase().includes(inpSearch.value.toLowerCase())) {
      mealsWrapper.innerHTML += `
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
        `;
    }
  });
}

basketListCount.textContent = JSON.parse(localStorage.getItem("basket")).length;
