let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Restart from the first slide
    }

    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds (adjust the interval as needed)
    setTimeout(showSlides, 5000);
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);
    