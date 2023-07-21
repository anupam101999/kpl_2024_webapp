// JavaScript code from script.js
const slidesContainer = document.querySelector(".slides");
const slides = slidesContainer.children;
let slideIndex = 0;

function showSlide(n) {
    slideIndex = n;
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Call the nextSlide function every 2 seconds (adjust this value as you like)
setInterval(nextSlide, 2000);

// Ensure the last image doesn't leave a blank page
slidesContainer.addEventListener("transitionend", () => {
    if (slideIndex === slides.length - 1) {
        slidesContainer.style.transition = "none";
        slideIndex = 0;
        showSlide(slideIndex);
        setTimeout(() => {
            slidesContainer.style.transition = "transform 0.5s ease";
        }, 0);
    }
});
