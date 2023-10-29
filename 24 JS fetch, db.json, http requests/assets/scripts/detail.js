let base_url = 'http://localhost:3000/books';
let booksWrapper2 = document.querySelector('.books-wrapper');
let id = new URLSearchParams(location.search).get('id');
console.log(id);

fetch(base_url+`/books/${id}`)
.then((response)=>response.json())
.then((book)=>{
    booksWrapper2.innerHTML =  `
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
    `
})