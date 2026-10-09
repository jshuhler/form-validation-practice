// VARIABLES
const form = document.querySelector("form");

// EMAIL VALIDAITON
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
        e.preventDefault();
    };
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You must enter an email address to submit.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "You've entered something other than an email address."
    }
};