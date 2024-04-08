//End of page buttons change page//
const pageUrls = [
  "https://www.thefoundationdoctor.co.uk/apps.html",
  "https://www.thefoundationdoctor.co.uk/teaching.html",
  "https://www.thefoundationdoctor.co.uk/finance.html",
  "https://www.thefoundationdoctor.co.uk/foundation.html",
  "https://www.thefoundationdoctor.co.uk/advice.html",
  "https://www.thefoundationdoctor.co.uk/Speciality.html",
  "https://www.thefoundationdoctor.co.uk/DayOne.html",
  "https://www.thefoundationdoctor.co.uk/contact.html",
  "https://www.thefoundationdoctor.co.uk/Wellbeing.html",
];

// Initialize currentPageIndex based on the current page URL
const currentPageUrl = window.location.href;
let currentPageIndex = pageUrls.indexOf(currentPageUrl);

function prevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    navigateToPage();
  }
}

function nextPage() {
  if (currentPageIndex < pageUrls.length - 1) {
    currentPageIndex++;
    navigateToPage();
  }
}

function navigateToPage() {
  const nextPageUrl = pageUrls[currentPageIndex];
  window.location.href = nextPageUrl;
}

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

//slideshow code
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

//anchorpaycheckcode
document
  .getElementById("payCheckImageMob")
  .addEventListener("click", function () {
    this.classList.toggle("fullscreen");
  });

//scrollToSection
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Attach click event listeners to the links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var sectionId = this.getAttribute("href").substr(1);
    scrollToSection(sectionId);
  });
});
