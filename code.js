// Get the current year
const currentYear = new Date().getFullYear();

// Update the content with the current year
document.getElementById("year").textContent = currentYear;

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

  // Change slide every x seconds (adjust the interval as needed)
  setTimeout(showSlides, 6000);
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

document
  .getElementById("payCheckImageMob")
  .addEventListener("click", function () {
    this.classList.toggle("fullscreen");
  });

