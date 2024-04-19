const subscribeBtn = document.querySelector(".subscribe");
const dismissBtn = document.querySelector(".dismiss.btn");
const signUpCard = document.querySelector(".sign-up.card");
const successCard = document.querySelector(".success.card");
const email = document.querySelector("#email");
const invalidEmailLabel = document.querySelector(".invalid.email-label");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});

dismissBtn.addEventListener("click", toggleContent);

function validateEmail() {
  const emailValue = email.value;
  if (/^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    toggleContent();
    hideInvalidStyles();
  } else {
    displayInvalidStyles();
  }
}

function toggleContent() {
  signUpCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
}

function displayInvalidStyles() {
  email.classList.add("invalid");
  invalidEmailLabel.classList.remove("hidden");
}

function hideInvalidStyles() {
  email.classList.remove("invalid");
  invalidEmailLabel.classList.add("hidden");
}
