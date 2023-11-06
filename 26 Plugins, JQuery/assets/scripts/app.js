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



let sliders = [];
let swipperWrapper = document.querySelector(".swiper-wrapper");
axios.get(base_url).then((result) => {
  console.log(result.data);
  sliders = result.data;
  sliders.forEach((slider) => {
    swipperWrapper.innerHTML += `
    <div class="swiper-slide">
    <span>${slider.title}</span>
    <img src="${slider.imageURL}"
    alt="">
</div>`;

    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  });

  let addBtn = document.querySelector(".add-btn");
  let imageAdd = document.querySelector("#img");
  let titleAdd = document.querySelector("#title");
  addBtn.addEventListener("click", function () {
    axios.put(base_url);
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("image");
    const titleInput = document.getElementById("title");
    const addBtn = document.querySelector(".add-btn");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
  
    addBtn.addEventListener("click", function () {
      const imageURL = imageInput.value;
      const title = titleInput.value;
  
      if (imageURL && title) {
        // Yeni slider HTML'i oluşturun
        const newSlider = document.createElement("div");
        newSlider.className = "swiper-slide";
        newSlider.innerHTML = `
          <span>${title}</span>
          <img src="${imageURL}" alt="${title}">
        `;
  
        // Yeni slider'ı swiperWrapper'a ekleyin
        swiperWrapper.appendChild(newSlider);
  
        // Inputları temizleyin
        imageInput.value = "";
        titleInput.value = "";
  
        axios.put(base_url, {
          imageURL: imageURL,
          title: title,
        })
      }
    });
  });
  
  
  