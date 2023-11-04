import { BASE_URL } from "./url.js";

let loginForm = document.querySelector("#loginForm");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let check = true;

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  axios.get(BASE_URL + `/users`).then((result) => {
      let users = result.data;
    users.forEach((user) => {
        // console.log(name == user.login && parol == user.password,username.value , user.login , password.value, user.password);
        console.log(username.value,password.value);
        if (username.value == user.login && password.value == user.password) {
        check = false;
        alert("Qeydiyyatdan ugurla kecdiz");
      }
    });
    if (check) {
      alert("bele bir istifadeci yoxdur");
    }
    console.log(result.data);
      username.value=""
      password.value=""
  });


});
