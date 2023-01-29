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
let closeBtn = document.querySelector(".close");
console.log(closeBtn);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



const errorMessages = document.querySelectorAll(".error__data");

let firstnameInput = document.querySelector("#firstName");
let lastNameInput = document.querySelector("#lastName");
let mailInput = document.querySelector("#email");
console.log(mailInput);




mailInput.addEventListener('blur', mailValidation);
mailInput.addEventListener('input', mailValidation);
firstnameInput.addEventListener('blur', firstNameValidation);
firstnameInput.addEventListener('input', firstNameValidation);
lastNameInput.addEventListener('blur', lastNameValidation);
lastNameInput.addEventListener('input', lastNameValidation);



function showValidation({index, validation}) {
  if (validation) {
    errorMessages[index].style.display = "none";
  } else {
    errorMessages[index].style.display = "block";
  }
}


const regexfirstName = /^[a-zA-Z-àâäéèêëïîôöùûüç ,.'-]+$/;
function firstNameValidation() {
  if (firstnameInput.value.length < 2 || !regexfirstName.test(firstnameInput.value)) {
      showValidation({index: 0, validation: false});
  } else {
      showValidation({index: 0, validation: true});
  }
}

function lastNameValidation() {
  if (lastNameInput.value.length < 2 || !regexfirstName.test(lastNameInput.value)) {
    showValidation({index: 1, validation: false});
  } else {
    showValidation({index: 1, validation: true});
  }
}


const regexMail = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$/;
function mailValidation() {
  if (!regexMail.test(mailInput.value)) {
    showValidation({index: 2, validation: false});
  } else {
    showValidation({index: 2, validation: true});
  }
}

// let personne = {prenom : "Jean", nom : "Dupont", age : 25, sexe : "homme", interets : ["musique", "cinéma", "sport"]};

// let {prenom, nom, age, sexe, interets, salut} = personne;

// console.log(prenom, nom, age, sexe, interets, salut);