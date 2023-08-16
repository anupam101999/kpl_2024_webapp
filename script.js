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
    fetch(url);
    window.open(url, '_blank');
  }















  function calculateReverseDate() {
    const refDate = '2023-08-20'; // Change this to your desired date in yyyy-mm-dd format
    const targetDate = new Date(refDate);
    const currentDate = new Date();
    
    // Calculate the time difference in milliseconds
    const timeDifference = targetDate - currentDate;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until ${refDate}`);
    
    const countdownElement = document.getElementById('countdown');
    if (timeDifference > 0) {
        countdownElement.textContent =
          `Hurry Up! ${days} days, ${hours - 5} hours, ${minutes - 30} minutes, ${seconds} seconds left until "Player" registration closes! Avoid Last-minute Rush, get your registration done within 20th August, 2023 (Sunday).`;
    } 
    else if (timeDifference == 0) {
        countdownElement.textContent = `Hurry Up! "Player" registration will be closed today!`;
    }
    else {
        countdownElement.textContent = "Sorry, We can't accept new registrations.";
    }
}

// Call the function initially
calculateReverseDate();

// Update the countdown every second
setInterval(calculateReverseDate, 1000);








