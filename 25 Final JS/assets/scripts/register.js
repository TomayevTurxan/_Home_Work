import { BASE_URL } from "./url.js";
const passwordInput = document.querySelector("#newPassword");
const passwordError = document.querySelector("#passwordError");

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const symbolRegex = /[!@#$%^&*]/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;

  // Parola uzunluğu kontrolü
  if (password.length < 8) {
    passwordError.textContent = "Qaqa en az 8 dene herfden zaddan yazmalisan.";
  } else if (!symbolRegex.test(password)) {
    passwordError.textContent = "En az bir simvol yaz";
  } else if (!uppercaseRegex.test(password)) {
    passwordError.textContent = "Parolunuz en az bir herfi boyuk olmalidi";
  } else if (!lowercaseRegex.test(password)) {
    passwordError.textContent = "Parolunuz en az bir herfi boyuk olmalidi";
  } else if (!numberRegex.test(password)) {
    passwordError.textContent = "En azi 1 reqem yazmalisan";
  } else {
    passwordError.textContent = "";
  }
});
