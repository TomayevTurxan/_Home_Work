let base_url = 'http://localhost:3000';
let tbody = document.querySelector('#tbody');
let id = new URLSearchParams(location.search).get('id');
console.log(id);

fetch(base_url+`/books/${id}`)
.then((response)=>response.json())
.then((book)=>{
    
})