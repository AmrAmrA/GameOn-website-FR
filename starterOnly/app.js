let menuIcon = document.querySelector(".menu__icon");
let mobileMenu = document.querySelector(".mobile__menu");
let filter = document.querySelector(".globalFilter");
let crossSign = document.querySelector(".cross__sign");
console.log(crossSign);


menuIcon.addEventListener("click", menuAppearance)
crossSign.addEventListener("click", menudisAppearance)


function menuAppearance() {
  mobileMenu.classList.add("appearance");
  filter.classList.add("toggleVisibilty");
}

function menudisAppearance() {
  mobileMenu.classList.remove("appearance");
  filter.classList.remove("toggleVisibilty");
}








// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


