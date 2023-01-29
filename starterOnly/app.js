let menuIcon = document.querySelector(".menu__icon");
let mobileMenu = document.querySelector(".mobile__menu");
let filter = document.querySelector(".globalFilter");
let crossSign = document.querySelector(".cross__sign");



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

const inputsValidities = {
  firstName: false,
  lastName: false,
  email: false,
  birthdate: false,
  quantity: false,
  checkboxConditions: false,
}



const errorMessages = document.querySelectorAll(".error__data");
const controlText = document.querySelectorAll(".text-control");



let firstnameInput = document.querySelector("#firstName");
let lastNameInput = document.querySelector("#lastName");
let mailInput = document.querySelector("#email");
let birthdateInput = document.querySelector("#birthdate");
let quantityInput = document.querySelector("#quantity");
let checkboxInput = document.querySelector(".checkboxConditions-input");
console.log(checkboxInput);





firstnameInput.addEventListener('blur', firstNameValidation);
firstnameInput.addEventListener('input', firstNameValidation);
lastNameInput.addEventListener('blur', lastNameValidation);
lastNameInput.addEventListener('input', lastNameValidation);
birthdateInput.addEventListener('blur', birthdateValidation);
birthdateInput.addEventListener('input', birthdateValidation);
mailInput.addEventListener('blur', mailValidation);
mailInput.addEventListener('input', mailValidation);
quantityInput.addEventListener('blur', quantityValidation);
quantityInput.addEventListener('input', quantityValidation);
checkboxInput.addEventListener('blur', checkboxValidation);
checkboxInput.addEventListener('input', checkboxValidation);



function showValidation({index, validation}) {
  if (validation) {
    errorMessages[index].style.display = "none";
    if(controlText[index]) {
      controlText[index].style.border = "3px solid green";
    }
  } else {
    errorMessages[index].style.display = "block";
    if(controlText[index]){
      controlText[index].style.border = "3px solid red";}
    }
  }
  
  
  const regexfirstName = /^[a-zA-Z-àâäéèêëïîôöùûüç ,.'-]+$/;
  function firstNameValidation() {
    if (firstnameInput.value.length < 2 || !regexfirstName.test(firstnameInput.value)) {
      showValidation({index: 0, validation: false});
      inputsValidities.firstName = false;
    } else {
      showValidation({index: 0, validation: true});
      inputsValidities.firstName = true;
    }
}

function lastNameValidation() {
  if (lastNameInput.value.length < 2 || !regexfirstName.test(lastNameInput.value)) {
    showValidation({index: 1, validation: false});
    inputsValidities.lastName = false;
  } else {
    showValidation({index: 1, validation: true});
    inputsValidities.lastName = true;
  }
}


const regexMail = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$/;
function mailValidation() {
  if (!regexMail.test(mailInput.value)) {
    showValidation({index: 2, validation: false});
    inputsValidities.email = false;
  } else {
    showValidation({index: 2, validation: true});
    inputsValidities.email = true;
  }
}

function birthdateValidation() {
  if (birthdateInput.value.length < 1) {
    showValidation({index: 3, validation: false});
    inputsValidities.birthdate = false;
  } else {
    showValidation({index: 3, validation: true});
    inputsValidities.birthdate = true;
  }
}

const regexNumber = /^[0-9]+$/;
function quantityValidation() {
  if (!regexNumber.test(quantityInput.value) || quantityInput.value.length < 1 || quantityInput.value > 99) {
    showValidation({index: 4, validation: false});
    inputsValidities.quantity = false;
  } else {
    showValidation({index: 4, validation: true});
    inputsValidities.quantity = true;
  }
}

function checkboxValidation() {
  if (!checkboxInput.checked) {
    showValidation({index: 5, validation: false});
    inputsValidities.checkboxConditions = false;
  } else {
    showValidation({index: 5, validation: true});
    inputsValidities.checkboxConditions = true;
  }
}

let isAnimated = false;
let modalBody = document.querySelector(".modal-body");
console.log(modalBody);
const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const keys = Object.keys(inputsValidities);
  const keysFailed  = keys.filter(key => { if(!inputsValidities[key]) return key;});
  
  if(keysFailed.length && !isAnimated) {
    isAnimated = true;
    modalBody.classList.add("shake");
  setTimeout(() => {
    modalBody.classList.remove("shake");
    isAnimated = false;
  }, 2500) 
  
  keysFailed.forEach(key => {
    const index = keys.indexOf(key);
    showValidation({index, validation: false});
  })}
   else {
    form.submit();
   }
  ; }
  console.log(form);
  