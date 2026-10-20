// FORM
const form = document.querySelector("form");

// EMAIL VALIDAITON
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
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

// this isn't working right now because I have `novalidate` on the form in the HTML. I can't figure out how to get the error to show, as the example on MDN was using the normal browser based notices for errors rather than a custom field like I have been using
const countrySelect = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const postalError = document.getElementById("postal-error");

function validatePostalCode() {
    const constraints = {
        ch: [
            "^(CH-)?\\d{4}$",
            "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        fr: [
            "^(F-)?\\d{5}$",
            "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
        ],
        de: [
            "^(D-)?\\d{5}$",
            "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        nl: [
            "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
            "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
        ],
    };

    const country = countrySelect.value;

    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);

    if (constraint.test(postalCode.value)) {
        postalCode.setCustomValidity("");
    } else {
        postalCode.setCustomValidity(constraints[country][1]);
    }

    postalCode.reportValidity();
};

countrySelect.addEventListener("change", validatePostalCode);
postalCode.addEventListener("input", validatePostalCode);

// PASSWORD VALIDATION
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

password.addEventListener("input", checkPassword);

function checkPassword() {
    if (passwordRegex.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password must be a minimum of 8 characters and contain at least: 1 uppercase letter, 1 lowercase letter, and 1 number.";
    }
};

// PASSWORD MATCHING VALIDATION
const passwordConfirm = document.getElementById("password-confirm");
const passwordConfirmError = document.getElementById("password-confirm-error");

passwordConfirm.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch () {
    if (password.value === passwordConfirm.value) {
        passwordConfirmError.textContent = "";
    } else {
        passwordConfirmError.textContent = "Passwords must match exactly.";
    };
};

// SUBMIT BUTTON
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        alert("You're missing something, check you meet all of the field requirements.");
    } else {
        alert("High five!");
    };
});