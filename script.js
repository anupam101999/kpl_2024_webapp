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















  function calculateReverseDate() {
    const refDate = new Date('2023-08-05'); // Reference date, change to your desired date in yyyy-mm-dd format
    const today = new Date();
    console.log(today);
    // const indianTimeOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours offset for Indian time zone (IST)

    const timeDifference = refDate - today;
    if (timeDifference > 0) {
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        // const reversedDate = new Date(today - (daysLeft - 1) * 24 * 60 * 60 * 1000 + indianTimeOffset);
        // const formattedDate = reversedDate.toLocaleDateString('en-IN', {
        //     timeZone: 'Asia/Kolkata',
        //     weekday: 'long',
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric'
        // }
        // );

        document.getElementById('countdown').textContent = `Hurry Up! ${daysLeft} days left until "Owner" registration closes! Avoid Last-minute Rush, get your team registration done with in 5th August,2023(Saturday).`;
    } else {
        document.getElementById('countdown').textContent = "Owner Registration deadline has passed.";
    }
}

// Call the function to perform the reverse date calculation
calculateReverseDate();