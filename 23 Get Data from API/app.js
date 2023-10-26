let cardsWrapper = document.querySelector(".card-wrapper");
let addBtn = document.querySelector(".add-btn");
let sortNameBtn = document.querySelector(".sort-btn-username");
let sortIdBtn = document.querySelector(".sort-btn-id");
let clearAll = document.querySelector(".clear-btn");
let loading = document.querySelector(".spinner-wrapper");
let API = "https://jsonplaceholder.typicode.com/users";

let categories = [];
async function fetchData() {
  loading.classList.replace("d-none", "d-flex");
  const response = await fetch(API);
  categories = await response.json();
  if (response.status == 200) {
    console.log(categories);
    loading.classList.replace("d-flex", "d-none");

    cardsWrapper.innerHTML = "";
    categories.forEach((category) => {
      cardsWrapper.innerHTML += `
      <tr>
                      <th scope="row">${category.id}</th>
                      <td>${category.name}</td>
                      <td>${category.username}</td>
                      <td>${category.email}</td>
                      <td>${category.address.city}</td>
                      <td>${category.website}</td>
                      <td><button type="button" class="btn btn-outline-success btn-modal">Learn More</button></td>
                  </tr>
      `;
    });
  }
  let openModalButtons = document.querySelectorAll(".btn-modal");
  openModalButtons.forEach((button,index) => {
    button.addEventListener("click", async () => {
        console.log(index);
        const selectedCategory = categories[index]
      Swal.fire({
        title: `Name:${selectedCategory.name}`,
        text:  `Adress street:${selectedCategory.address.street},Adress suite:${selectedCategory.address.suite} ,  Adress city:${selectedCategory.address.city}`, 
        footer: `Phone: ${selectedCategory.phone}`,
      });
    });
  });
}
addBtn.addEventListener("click", async () => {
  await fetchData();
});

sortNameBtn.addEventListener("click", async () => {
  await fetchData();
  categories.sort((x, y) => x.name.localeCompare(y.name));
  renderCategories();
});

sortIdBtn.addEventListener("click", async () => {
  await fetchData();
  categories.sort((x, y) => y.id - x.id);
  renderCategories();
});

clearAll.addEventListener("click", async () => {
  if (cardsWrapper.innerHTML !== "") {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure to delete table?",
        text: "Silenden sora geri qayidan zad deyil!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sil,qaqa!",
        cancelButtonText: "Silme, qaqa!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          cardsWrapper.innerHTML = "";
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Silinmedi qaqa",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }
});

function renderCategories() {
  cardsWrapper.innerHTML = "";

  categories.forEach((category) => {
    cardsWrapper.innerHTML += `
      <tr>
          <th scope="row">${category.id}</th>
          <td>${category.name}</td>
          <td>${category.username}</td>
          <td>${category.email}</td>
          <td>${category.address.city}</td>
          <td>${category.website}</td>
          <td><button type="button" class="btn btn-outline-success">Learn More</button></td>
      </tr>
      `;
  });
}
