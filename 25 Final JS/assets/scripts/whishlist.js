import { BASE_URL } from "./url.js";
let whishListCount = document.querySelector(".whishListCount");
document.addEventListener("DOMContentLoaded", function () {
  let favorites = [];

  let tbody = document.querySelector("#tbody");

  favorites = JSON.parse(localStorage.getItem("cart"));
  // console.log(favorites);
  if (favorites) {
    axios.get(BASE_URL + `/rappers`).then((result) => {
      let singers = result.data;

      //   console.log(singers);
      tbody.innerHTML = "";
      favorites.forEach((favCard) => {
        let singer = singers.find((singer) => singer.id == favCard.id);
        // console.log(singer);
        tbody.innerHTML += `
            <tr>
            <th scope="row">${singer.id}</th>
            <td>${singer.name}</td>
            <td class="img-box"><img src="${singer.imagelink}"
                    alt="${singer.name}"></td>
            <td>${singer.age}</td>
            <td>${singer.genre}</td>
            <td><button id=${singer.id} type="button" class="btn btn-danger delete-btn"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
            `;
        let deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((btn) => {
          btn.addEventListener("click", function () {
            //UI
            this.parentElement.parentElement.remove();

            //Local delete
            if (!JSON.parse(localStorage.getItem("cart"))) {
              localStorage.setItem("cart", JSON.stringify([{ id: this.id }]));
            } else {
              let cardsLocal = JSON.parse(localStorage.getItem("cart"));
              let found = cardsLocal.find((x) => x.id == this.id);
              if (found) {
                let updatedCat = cardsLocal.filter((x) => x.id != this.id);
                localStorage.setItem("cart", JSON.stringify(updatedCat));
                whishListCount.textContent = JSON.parse(
                  localStorage.getItem("cart")
                ).length;
              } else {
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cardsLocal, { id: this.id, quantity: 1 }])
                );
                whishListCount.textContent = JSON.parse(
                  localStorage.getItem("cart")
                ).length;
              }
            }
          });
        });
      });
    });
  } else {
  }
});
whishListCount.textContent = JSON.parse(localStorage.getItem("cart")).length;
