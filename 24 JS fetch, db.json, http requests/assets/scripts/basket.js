// document.addEventListener("DOMContentLoaded", function () {
//     let cart = [];
  
//     let tbody = document.querySelector("#tbody");
//     let totalItems = document.querySelector("#total-items");
//     let totalPrice = document.querySelector("#total-price");
  
//     // Kitap ekleme işlevi
//     function addToCart(book) {
//       const existingItem = cart.find((item) => item.id === book.id);
  
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         cart.push({ ...book, quantity: 1 });
//       }
  
//       localStorage.setItem("cart", JSON.stringify(cart));
  
//       updateCartTable();
//     }
  
//     function updateCartTable() {
//       tbody.innerHTML = "";
//       let itemCount = 0;
//       let totalPriceValue = 0;
//         console.log(cart);
//       cart.forEach((item, index) => {
//         itemCount += item.quantity;
//         const itemTotalPrice = item.quantity * item.price;
//         console.log(itemTotalPrice);
//         totalPriceValue += itemTotalPrice;
  
//         tbody.innerHTML += `
//           <tr>
//             <td>${index + 1}</td>
//             <td>${item.name}</td>
//             <td><img src="${item.coverImage}" alt="${item.name}" /></td>
//             <td>${item.price} AZN</td>
//             <td>${item.quantity}</td>
//             <td>${itemTotalPrice} AZN</td>
//             <td>
//             <button type="button" class="btn btn-danger">-</button>
//             <button type="button" class="btn btn-success">+</button>
//             </td>
//           </tr>
//         `;
//       });
  
//       totalItems.textContent = itemCount;
//       totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
//     }
  
//     if (localStorage.getItem("cart")) {
//       cart = JSON.parse(localStorage.getItem("cart"));
//     }
  
//     const cartButtons = document.querySelectorAll(".cart-shopping");
//     cartButtons.forEach((button) => {
//       button.addEventListener("click", function () {
//         const bookId = this.id;
//         const selectedBook = books.find((book) => book.id == bookId);
//         addToCart(selectedBook);
//       });
//     });

//     updateCartTable();
//   });
  