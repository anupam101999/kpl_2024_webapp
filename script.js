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
    const refDate = '2024-08-08'; // Change this to your desired date in yyyy-mm-dd format
    const targetDate = new Date(refDate);
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = targetDate - currentDate;

    // Subtract 5 hours and 30 minutes (5 * 60 * 60 * 1000 + 30 * 60 * 1000) from the time difference
    const modifiedTimeDifference = timeDifference - (5 * 60 * 60 * 1000 + 30 * 60 * 1000);

    // Convert the modified time difference back to a Date object
    const modifiedDate = new Date(currentDate.getTime() + modifiedTimeDifference);

   // console.log('Modified Date:', modifiedDate);

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(modifiedTimeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((modifiedTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((modifiedTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((modifiedTimeDifference % (1000 * 60)) / 1000);

   // console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until ${refDate}`);

    const countdownElement = document.getElementById('countdown');
    if (!modifiedTimeDifference > 0) {
        countdownElement.textContent =
            `Hurry Up guys! Registration will end in ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    else {
        countdownElement.textContent = 'KPL 2024 মরশুমের জন্য কমিটির পক্ষ থেকে জানানো যাচ্ছে যে এ বছর নতুন টিমের (franchise) স্লট available রয়েছে। ইচ্ছুক ব্যক্তি ব্যক্তিবর্গ KPL কমিটির সঙ্গে যোগাযগ করুন Ph - 62964 71117(রনি), 87773 06063(অজয়)';
    }
}

// Call the function initially
// calculateReverseDate();

// Update the countdown every second
setInterval(calculateReverseDate, 1000);








