// Simple JavaScript for Company Landing Page
// Author: Aditya Kumar Singh
// Purpose: Basic interactivity and form validation

// Change header text on page load
window.onload = function () {
    console.log("Website Loaded Successfully");
};

// Contact form validation
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields before submitting.");
        return;
    }

    // Basic email check
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");

    // Reset form after submission
    form.reset();
});

// Simple hover effect using JS (optional but natural)
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1)";
    });
});
