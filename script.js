const email = document.getElementById("email");

email.addEventListener("input", (e) => {
    email.setCustomValidity("");
    if (!email.validity.valid) {
        return;
    }
    if (!email.value.endsWith("@fakenet.org")) {
        email.setCustomValidity("You must register with a @fakenet.org email address.")
    }
})