// Preload images for the slideshow
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

// Function to cycle through the slideshow
function showSlides() {
    slides[currentSlide].style.display = 'none';  // Hide current slide
    currentSlide = (currentSlide + 1) % slides.length;  // Move to the next slide
    slides[currentSlide].style.display = 'block';  // Show next slide
}

// Automatically play the slideshow every 3 seconds
setInterval(showSlides, 3000);

// Play the Nigerian National Anthem when the page loads
window.onload = () => {
    const audio = new Audio('nigerian-anthem.mp3');
    audio.play();
}

// Countdown to Next Independence Day
const countdownTimer = document.querySelector('.countdown-timer');
const independenceDay = new Date('October 1, 2025');

function countdown() {
    const currentTime = new Date();
    const timeDifference = independenceDay.getTime() - currentTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

countdown();
setInterval(countdown, 1000);