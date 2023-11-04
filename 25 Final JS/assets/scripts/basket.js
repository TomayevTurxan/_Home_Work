import { BASE_URL } from "./url.js";

document.addEventListener("DOMContentLoaded", function () {
  let baskets = [];
  
  let basketListCount = document.querySelector(".basketListCount");
  let tbody = document.querySelector("#tbody");
  baskets = JSON.parse(localStorage.getItem("basket"));

  let totalQuantity = 0;
  let totalPrice = 0;

  if (baskets) {
    axios.get(BASE_URL + `/meals`).then((result) => {
      let meals = result.data;
      console.log(meals);

      tbody.innerHTML = "";
      baskets.forEach((basketMeal) => {
        let meal = meals.find((meal) => meal.id == basketMeal.id);
        console.log(meal);
        tbody.innerHTML += `
                <tr>
                    <td class="basket-id">${meal.id}</td>
                    <td class="basket-title">${meal.name}</td>
                    <td class="basket-img img-box"><img src="${meal.imageLink}" alt="${meal.name}"></td>
                    <td class="basket-price">${meal.price}</td>
                    <td class="basket-quantity">${basketMeal.count}</td>
                    <td class="basket-total">${meal.price*basketMeal.count}</td>
                    <td><button id="${meal.id}" type="button" class="btn btn-success increase" >+</button></td>
                    <td><button id="${meal.id}" type="button" class="btn btn-danger decrease">-</button></td>
                    <td><button id="${meal.id}" type="button" class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
                `;
        //delete Buttons
        let deleteButtons = document.querySelectorAll(".remove");
        let arr = [];

        if (JSON.parse(localStorage.getItem("basket"))) {
          arr = JSON.parse(localStorage.getItem("basket"));
        }
        deleteButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            //UI remove
            this.parentElement.parentElement.remove();

            //local Delete
            if (!JSON.parse(localStorage.getItem("basket"))) {
              localStorage.setItem("basket", JSON.stringify([{ id: this.id }]));
            } else {
              let basketLocal = JSON.parse(localStorage.getItem("basket"));
              let found = basketLocal.find((x) => x.id == this.id);
              console.log(found);
              if (found) {
                let updatedbasket = basketLocal.filter((x) => x.id != this.id);
                localStorage.setItem("basket", JSON.stringify(updatedbasket));
                basketListCount.textContent = JSON.parse(
                  localStorage.getItem("basket")
                ).length;
              } else {
                localStorage.setItem(
                  "basket",
                  JSON.stringify([...basketLocal, { id: this.id, count: 1 }])
                );
                basketListCount.textContent = JSON.parse(
                  localStorage.getItem("basket")
                ).length;
              }
            }
          });
        });

        //increase
        let increaseButtons = document.querySelectorAll(".increase");
        increaseButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            let currentBasket = JSON.parse(localStorage.getItem("basket"));
            let foundItem = currentBasket.find((x) => x.id == this.id);
            foundItem.count++;
            this.parentElement.previousElementSibling.previousElementSibling.textContent =
            foundItem.count;
            let mealPrice = parseFloat(this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
            let totalPriceElement =this.parentElement.previousElementSibling; 
            totalPriceElement.textContent = mealPrice * foundItem.count;
            basketListCount.textContent = JSON.parse(localStorage.getItem("basket")).length;
            localStorage.setItem("basket", JSON.stringify([...currentBasket]));
              
              // console.log(totalPriceElement);
          });
        });

        //decrease
        let decreaseButtons = document.querySelectorAll(".decrease");
        decreaseButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            let currentBasket = JSON.parse(localStorage.getItem("basket"));
            let foundItem = currentBasket.find((x) => x.id == this.id);
            if (foundItem.count>1) {
              foundItem.count--;
              this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent =foundItem.count;
              let mealPrice = parseFloat(this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
                let totalPriceElement = this.parentElement.previousElementSibling.previousElementSibling
                totalPriceElement.textContent = mealPrice * foundItem.count;
                localStorage.setItem("basket", JSON.stringify([...currentBasket]));
                
            }
            
          });
        });

        //basketde hesablanmanin gorunmesi
      });
    });
  }
});
basketListCount.textContent = JSON.parse(localStorage.getItem("basket")).length;
