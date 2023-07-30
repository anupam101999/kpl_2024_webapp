// JavaScript code from script.js
document.addEventListener("DOMContentLoaded", function () {
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

        // Set the manual image count based on screen width in inches (approximation)
        const screenWidthInPixels = window.innerWidth;
        const dpi = 96; // Standard DPI value for most screens (adjust if necessary)
        const inches = screenWidthInPixels / dpi;

        let manualImageCount;

        if (inches < 10) { // image count-1
            manualImageCount = 13;
        } else { // image count/2-1
            manualImageCount = 6;
        }

        if (slideIndex === manualImageCount) {
            // Reset back to the first image after the manualImageCount
            setTimeout(() => {
                slideIndex = 0;
                showSlide(slideIndex);
            }, 3000);
        }
    }

    // Call the nextSlide function every 2 seconds (adjust this value as you like)
    setInterval(nextSlide, 3000);
});





function redirectToURL(url) {
    window.open(url, '_blank');
  }