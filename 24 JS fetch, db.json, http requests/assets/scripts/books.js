let API = "http://localhost:3000/books";
let booksWrapper = document.querySelector(".books-wrapper");
let SeachBook = document.querySelector("#search-input");
let sortYear = document.querySelector(".sort-year");
let loading = document.querySelector(".spinner-wrapper");
let selectButton = document.querySelector(".form-select");
let saveBtn = document.querySelector(".save-btn");
let addBtn = document.querySelector(".add-btn");
let basketCount  = document.querySelector(".basketCount")
let books = [];

async function fetchData() {
  try {
    loading.classList.replace("d-none", "d-flex");
    const response = await fetch(`${API}`);
    books = await response.json();
    if (response.status == 200) {
      loading.classList.replace("d-flex", "d-none");
      booksWrapper.innerHTML = "";
      books.forEach((book) => {
        booksWrapper.innerHTML += `
        <div class="col-3">
        <div class="card" style="width: 18rem;">
           <div class="img-box">
            <img class="card-img-top"
            src="${book.coverImage}"
            alt="Card image cap">
           </div>
            <div class="card-info">
                <h5 class="card-title"}>${book.name}</h5>
                <p class="card-text">${book.description}</p>
            </div>
            <div class="card-body">
                <span class="card-year">Buraxildigi il:${book.year}</span>
                <span class="card-pageCount">Sehife sayi:${book.pageCount}</span>
                <span class="card-genre">Kategoriya: ${book.genre}</span>
                <span class="card-author">Kitabin müəllifi:${book.author}</span>
                <div class="edited-buttons">
                    <button type="button" class="btn btn-danger delete-btn" data-id="${book.id}"><i class="fa-solid fa-trash"></i></button>
                    <button data-img="${book.coverImage}" data-name="${book.name}" data-desc="${book.description}"  data-year="${book.year}" data-page="${book.pageCount}" data-author="${book.author}" type="button" class="btn btn-success edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                    <a href="detail.html?id=${book.id}" class="btn btn-primary btn-details">Go to Details</a>
                    <button id="${book.id}" type="button" class="btn btn-secondary cart-shopping"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
    </div>
        `;

        let deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((remove) => {
          remove.addEventListener("click", function () {
            // delete from UL
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
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                this.parentElement.parentElement.parentElement.parentElement.remove();
                const bookID = this.getAttribute("data-id");
                deleteBookDbJson(bookID);
              }
            });
          });
        });

        //edit btn
        let editBookName = document.querySelector("#editBookName");
        let editDescription = document.querySelector("#editDescription");
        let editAuthor = document.querySelector("#editAuthor");
        let editYear = document.querySelector("#editYear");
        let editPageCount = document.querySelector("#editPageCount");
        let editCoverImage = document.querySelector("#editCoverImage");

        let editButtons = document.querySelectorAll(".edit-btn");
        editButtons.forEach((edit) => {
          edit.addEventListener("click", function () {
            let img = this.getAttribute("data-img");
            let name = this.getAttribute("data-name");
            let desc = this.getAttribute("data-desc");
            let year = this.getAttribute("data-year");
            let pageCount = this.getAttribute("data-page");
            let author = this.getAttribute("data-author");
            let id = this.previousElementSibling.getAttribute("id");

            editCoverImage.value = img;
            editBookName.value = name;
            editDescription.value = desc;
            editYear.value = year;
            editPageCount.value = pageCount;
            editAuthor.value = author;

            let editForm = document.querySelector("#editForm");
            console.log(editForm);
            editForm.addEventListener("submit", async (e) => {
              e.preventDefault();

              try {
                let response = await fetch(`http://localhost:3000`+`/books/${id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    coverImage: editCoverImage.value,
                    name: editBookName.value,
                    pageCount: editCoverImage.value,
                    author: editAuthor.value,
                    year: editYear.value,
                    description: editDescription.value,
                  }),
                });
              } catch (error) {
                console.log(error);
              }
            });
          });
        });

        //name click edende modal acilmasi
        let bookNames = document.querySelectorAll(".card-title");
        bookNames.forEach((title, index) => {
          title.addEventListener("click", async () => {
            const book = books[index];
            Swal.fire({
              title: `${book.name}`,
              text: `${book.description}`,
              imageUrl: `${book.coverImage}`,
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            });
          });
        });


        //baskete click olundugda
        let addCardButtons = document.querySelectorAll(".cart-shopping")
        addCardButtons.forEach(btn => {
          btn.addEventListener("click",function(){
            fetch(`http://localhost:3000`+`/books/${this.id}`)
            .then((res)=>res.json())
            .then((product)=>{//islemir herdefesinde locala id-si 1 olanlarida atir
              // console.log(product);
              product.quantity = 1
              if (JSON.parse(localStorage.getItem("cart"))==null) {
                  localStorage.setItem("cart",JSON.stringify([product]))
                  console.log(basketCount);
                  basketCount.textContent = JSON.parse(localStorage.getItem("cart")).length;
              }else{
                   let card = JSON.parse(localStorage.getItem("cart"))
                   let found = card.find((x)=>x.id === product.id)
                   if (found) {
                      found.quantity++;
                    localStorage.setItem("cart",JSON.stringify([...card]))
                   }else{
                    localStorage.setItem("cart",JSON.stringify([...card,product]))
                    basketCount.textContent = JSON.parse(localStorage.getItem("cart")).length;
                    console.log(basketCount.textContent);
                   }
              }
            })
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Book added to cart',
              showConfirmButton: false,
              timer: 1500
            })
          })
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
  basketCount.textContent = JSON.parse(localStorage.getItem("cart")).length;

  addBtn.addEventListener("click", () => {
    alert("ads");
  });
}
fetchData();

//db jsondan silmek
async function deleteBookDbJson(bookID) {
  try {
    const response = await fetch(`${API}/${bookID}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

sortYear.addEventListener("click", function () {
  books.sort((a, b) => a.year - b.year);
  renderBooks(books);
});

selectButton.addEventListener("change", function () {
  console.log(selectButton.value);
  switch (selectButton.value) {
    case "ALL":
      fetchData();
      break;
    case "Fantastik":
      renderBooks(books.filter((book) => book.genre === "Fantastik"));
      break;
    case "Drama":
      renderBooks(books.filter((book) => book.genre === "Drama"));
      break;
    case "Thriller":
      renderBooks(books.filter((book) => book.genre === "Thriller"));
      break;
    case "Detective":
      renderBooks(books.filter((book) => book.genre === "Detective"));
      break;
    case "Science Fiction":
      renderBooks(books.filter((book) => book.genre === "Science Fiction"));
      break;

    default:
      break;
  }
});

SeachBook.addEventListener("keyup", async () => {
  renderBooks(books);
});

function renderBooks(arr) {
  booksWrapper.innerHTML = "";
  arr.forEach((book) => {
    console.log(book.name);
    console.log(SeachBook.value);
    if (book.name.toLowerCase().includes(SeachBook.value.toLowerCase())) {
      booksWrapper.innerHTML += `
                <div class="col-3">
                <div class="card" style="width: 18rem;">
                   <div class="img-box">
                    <img class="card-img-top"
                    src="${book.coverImage}"
                    alt="Card image cap">
                   </div>
                    <div class="card-info">
                        <h5 class="card-title">${book.name}</h5>
                        <p class="card-text">${book.description}</p>
                    </div>
                    <div class="card-body">
                        <span>Buraxildigi il:${book.year}</span>
                        <span>Sehife sayi:${book.pageCount}</span>
                        <span>Kategoriya: ${book.genre}</span>
                        <span>Kitabin müəllifi:${book.author}</span>
                        <div class="edited-buttons">
                            <button type="button" class="btn btn-danger" data-id="${book.id}"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square"></i></button>
                            <a href="detail.html?id=${book.id}" class="btn btn-primary">Go to Details</a>
                        </div>
                    </div>
                </div>
            </div>
                `;
    }
  });
}
