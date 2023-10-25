let accordions = document.querySelectorAll(".accordion");

accordions.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    let accordionText = item.querySelector(".accordion-text");
    accordionText.classList.toggle("active");

    let icon = item.querySelector(".fa-chevron-down")
    icon.classList.toggle("rotate")
    accordions.forEach((element) => {
      if (element !== item ) {
        let otherAccordionText = element.querySelector(".accordion-text");
        otherAccordionText.classList.remove("active")

        let otherIcon = element.querySelector(".fa-chevron-down");
        otherIcon.classList.remove("rotate")
      }
    });
  });
});
