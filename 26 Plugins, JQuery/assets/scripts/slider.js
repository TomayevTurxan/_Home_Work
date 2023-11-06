import { base_url } from "./url.js";
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}
  
  const darkmode = new Darkmode(options);

  function addDarkmodeWidget() {
    darkmode.showWidget();
  }
  window.addEventListener("load", addDarkmodeWidget);



let cardWrapper = document.querySelector(".cards-wrapper");

axios.get(base_url).then((result) => {
  let cards = result.data;
  console.log(result.data);

  cards.forEach((card) => {
    console.log(card);
    cardWrapper.innerHTML += `
           <div class="col-xl-3">
                <div class="card" id=i${card.id} style="width: 18rem;">
                <img class="card-img-top"
                    src="${card.imageURL}"
                    alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <button data-id="${card.id}"   type="button" class="btn btn-danger btn-delete"><i class="fa-solid fa-trash"></i></button>
                    <button data-id="${card.id}" data-title="${card.title}" data-img="${card.imageURL}" type="button" class="btn btn-warning btn-edit"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
           </div>
            `;
            let deleteButtons = document.querySelectorAll(".btn-delete")
            deleteButtons.forEach(btn => {
                btn.addEventListener("click",function(){
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                            this.parentElement.parentElement.parentElement.remove()
                            const id = this.getAttribute("data-id"); 
                            console.log(id);
                            //axios delete
                            //sual verecen sabah nie id ile verende islemedi ama data id ile isledi
                            axios.delete(base_url+`/${id}`)
                            console.log( this.parentElement.parentElement.parentElement)
                            //UI delete
                            // console.log(acr);
                        }
                      });
                })
            });

            let editButtons = document.querySelectorAll(".btn-edit")
            let editTitleInp = document.querySelector("#editTitle")
            let editImgInp = document.querySelector("#editImg")
            let editForm = document.querySelector("#form")
            editButtons.forEach(btn => {
                    btn.addEventListener("click",function(){
                       try {
                        let img = this.getAttribute("data-img")
                       let title = this.getAttribute("data-title")
                    //    let id = this.getAttribute("data-id")
                       let id = Number(this.parentElement.parentElement.getAttribute("id").slice(1))
                    //    console.log(title);
                        console.log(id);
                        editTitleInp.value = title
                        editImgInp.value = img
                        console.log(editTitleInp.value);
                        console.log(editImgInp.value);
                        console.log(img);
                        console.log(title);
                        editForm.addEventListener("submit",function(e){
                            e.preventDefault()
                            // alert("wfee")
                            axios.put(base_url+`/${id}`,{
                                title: editTitleInp.value,
                                img: editImgInp.value,
                            })
                            console.log(title);
                            console.log(img);
                        })
                        
                       } catch (error) {
                        console.log(error);
                       }
                    })
            });
  });
});
