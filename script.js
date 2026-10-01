```javascript
// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close mobile menu when a link is clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // =========================
    // NAME VALIDATION
    // =========================

    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else if (name.length < 2) {
        nameError.textContent = "Name must contain at least 2 characters.";
        isValid = false;
    }


    // =========================
    // EMAIL VALIDATION
    // =========================

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    // =========================
    // MESSAGE VALIDATION
    // =========================

    const message = messageInput.value.trim();

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent =
            "Message must contain at least 10 characters.";
        isValid = false;
    }


    // =========================
    // SUCCESS
    // =========================

    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();
    }
});
```
