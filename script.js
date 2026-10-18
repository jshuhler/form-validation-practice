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
const countrySelect = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const postalError = document.getElementById("postal-error");

function validatePostalCode() {
    const constraints = {
        ca: [
            "[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$",
            "Canadian Postal Codes must have exactly 6 digits and follow the A#A A#A format."
        ],
        mx: [
            "^\d{5}$",
            "Mexican Postal Codes must have exactly 5 digits."
        ],
        us: [
            "^\d{5}$",
            "United States Postal Codes must have exactly 5 digits."
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