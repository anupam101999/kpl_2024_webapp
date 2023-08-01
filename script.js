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
    const refDate = '5'; // Reference date, change to your desired date in yyyy-mm-dd format
    const today = new Date().getDate();
    console.log(today);
    const timeDifference = refDate - today;
    if (timeDifference > 0) {     
        console.log(timeDifference);
        document.getElementById('countdown').textContent = `Hurry Up! ${timeDifference} days left until "Owner" registration closes! Avoid Last-minute Rush, get your team registration done with in 5th August,2023(Saturday).`;
    } 
    else if(timeDifference==0){
        document.getElementById('countdown').textContent = `Hurry Up! Today "Owner" registration will be closed!`;
    }
    else {
        document.getElementById('countdown').textContent = "Owner Registration deadline has passed.";
    }
}

// Call the function to perform the reverse date calculation
calculateReverseDate();









//    Function to get the public IP address using ipinfo.io
   function getPublicIP() {
    return fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => data.ip)
      .catch(error => {
        console.error('Error getting public IP:', error);
        return 'Error getting public IP';
      });
  }

  // Call the function to get the public IP when the page loads
  window.addEventListener('DOMContentLoaded', () => {
    getPublicIP().then(publicIP => {
      const publicIPElement = document.getElementById('publicIP');
      publicIPElement.textContent = publicIP;
    });
  });