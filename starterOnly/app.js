// DOM Elements for the menu in mobile view
let menuIcon = document.querySelector(".menu__icon");
let mobileMenu = document.querySelector(".mobile__menu");
let filter = document.querySelector(".globalFilter");
let crossSign = document.querySelector(".cross__sign");

// Event Listeners
menuIcon.addEventListener("click", menuAppearance);
crossSign.addEventListener("click", menudisAppearance);

// Toggle menu appearance and visibility in mobile view
function menuAppearance() {
  mobileMenu.classList.add("appearance");
  filter.classList.add("toggleVisibilty");
}

function menudisAppearance() {
  mobileMenu.classList.remove("appearance");
  filter.classList.remove("toggleVisibilty");
}

// ------------------ Open and Close Form  ------------------ //

// DOM Elements for the form
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
  content.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// ------------------ Form Validation  ------------------ //

// DOM Elements representing the inputs
let firstnameInput = document.querySelector("#firstName");
let lastNameInput = document.querySelector("#lastName");
let mailInput = document.querySelector("#email");
let birthdateInput = document.querySelector("#birthdate");
let quantityInput = document.querySelector("#quantity");
let checkboxInput = document.querySelector(".checkboxConditions-input");
let modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");
let content = document.querySelector(".content");
let subscriptionBlock = document.querySelector(".subscription__block");

// DOM Elements representing the error messages and the input border
const errorMessages = document.querySelectorAll(".error__data");
const controlText = document.querySelectorAll(".text-control");

// Launching event listeners on inputs to check the validity of the inputs
firstnameInput.addEventListener("blur", firstNameValidation);
firstnameInput.addEventListener("input", firstNameValidation);
lastNameInput.addEventListener("blur", lastNameValidation);
lastNameInput.addEventListener("input", lastNameValidation);
birthdateInput.addEventListener("blur", birthdateValidation);
birthdateInput.addEventListener("input", birthdateValidation);
mailInput.addEventListener("blur", mailValidation);
mailInput.addEventListener("input", mailValidation);
quantityInput.addEventListener("blur", quantityValidation);
quantityInput.addEventListener("input", quantityValidation);
checkboxInput.addEventListener("blur", checkboxValidation);
checkboxInput.addEventListener("input", checkboxValidation);
// Launching event listener to submit the form
form.addEventListener("submit", handleFormSubmit);
// Launching event to show message for the user after submitting the form
let crossSubscription = document.querySelector(".cross__subscription");
let buttonSubscription = document.querySelector(".button__subscription");

const inputsValidities = {
  firstName: false,
  lastName: false,
  email: false,
  birthdate: false,
  quantity: false,
  checkboxConditions: false,
};

// Function to show the error message and change the border color for every input
function showValidation({ index, validation }) {
  if (validation) {
    errorMessages[index].style.display = "none";
    if (controlText[index]) {
      controlText[index].style.border = "3px solid green";
    }
  } else {
    errorMessages[index].style.display = "block";
    if (controlText[index]) {
      controlText[index].style.border = "3px solid red";
    }
  }
}
// Regex for the first name and last name
const regexfirstName = /^[a-zA-Z-àâäéèêëïîôöùûüç ,.'-]+$/;
// Function to check if firstName is valid
function firstNameValidation() {
  if (
    firstnameInput.value.length < 2 ||
    !regexfirstName.test(firstnameInput.value)
  ) {
    showValidation({ index: 0, validation: false });
    inputsValidities.firstName = false;
  } else {
    showValidation({ index: 0, validation: true });
    inputsValidities.firstName = true;
  }
}
// Function to check if lastName is valid
function lastNameValidation() {
  if (
    lastNameInput.value.length < 2 ||
    !regexfirstName.test(lastNameInput.value)
  ) {
    showValidation({ index: 1, validation: false });
    inputsValidities.lastName = false;
  } else {
    showValidation({ index: 1, validation: true });
    inputsValidities.lastName = true;
  }
}

// Regex for the email
const regexMail = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,10}$/;
// Function to check if email is valid
function mailValidation() {
  if (!regexMail.test(mailInput.value)) {
    showValidation({ index: 2, validation: false });
    inputsValidities.email = false;
  } else {
    showValidation({ index: 2, validation: true });
    inputsValidities.email = true;
  }
}
// Function to check if birthdate is valid
function birthdateValidation() {
  if (birthdateInput.value.length < 1) {
    showValidation({ index: 3, validation: false });
    inputsValidities.birthdate = false;
  } else {
    showValidation({ index: 3, validation: true });
    inputsValidities.birthdate = true;
  }
}
// Regex to check the number of participations
const regexNumber = /^[0-9]+$/;
function quantityValidation() {
  if (
    !regexNumber.test(quantityInput.value) ||
    quantityInput.value.length < 1 ||
    quantityInput.value > 99
  ) {
    showValidation({ index: 4, validation: false });
    inputsValidities.quantity = false;
  } else {
    showValidation({ index: 4, validation: true });
    inputsValidities.quantity = true;
  }
}
// function to see if the checkbox is checked
function checkboxValidation() {
  if (!checkboxInput.checked) {
    showValidation({ index: 5, validation: false });
    inputsValidities.checkboxConditions = false;
  } else {
    showValidation({ index: 5, validation: true });
    inputsValidities.checkboxConditions = true;
  }
}

// function to submit the form
function handleFormSubmit(event) {
  event.preventDefault();
  const keys = Object.keys(inputsValidities);
  const keysFailed = keys.filter((key) => {
    if (!inputsValidities[key]) return key;
  });

  if (keysFailed.length) {
    keysFailed.forEach((key) => {
      const index = keys.indexOf(key);
      showValidation({ index, validation: false });
    });
  } else {
    content.style.display = "none";
    subscriptionBlock.style.display = "block";
    // Show user's informations
    console.log("firstName", firstnameInput.value);
    console.log("lastName", lastNameInput.value);
    console.log("email", mailInput.value);
    console.log("birthdate", birthdateInput.value);
    console.log("quantity", quantityInput.value);
    console.log("checkboxConditions", checkboxInput.checked);
    
  }
}

// Show the message to the user after submitting the form 
crossSubscription.addEventListener("click", () => {
  subscriptionBlock.style.display = "none";
  modalbg.style.display = "none";
});
buttonSubscription.addEventListener("click", () => {
  subscriptionBlock.style.display = "none";
  modalbg.style.display = "none";
});
