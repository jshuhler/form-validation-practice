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
        emailError.textContent = "You must enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "You must enter a valid email address."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email address must be at least ${email.minLength} characters total.`
    }
};

// COUNTRY AND POSTAL CODE VALIDATION
const countrySelect = document.getElementById("country");
const postalCode = document.getElementById("postal-code");

function checkPostalCode {
    
}