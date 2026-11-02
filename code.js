//End of page buttons change page//
const pageUrls = [
  "apps.html",
  "teaching.html",
  "finance.html",
  "foundation.html",
  "advice.html",
  "Speciality.html",
  "DayOne.html",
  "Essentials.html",
  "Wellbeing.html",
];
//cookies remember browser function
function acceptCookies() {
  const alert = document.getElementById("cookie-alert");
  if (alert) {
    alert.style.display = "none";
  }
  document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // Expires in 1 year
}

function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.addEventListener("DOMContentLoaded", function () {
  if (getCookie("cookiesAccepted")) {
    const alert = document.getElementById("cookie-alert");
    if (alert) {
      alert.style.display = "none";
    }
  }
});

// Attach click event listeners to the links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var sectionId = this.getAttribute("href").substr(1);
    scrollToSection(sectionId);
  });
});
// Initialize currentPageIndex based on the current page URL
const currentPagePath = window.location.pathname.toLowerCase();
let currentPageIndex = pageUrls.findIndex(
  (pageUrl) =>
    new URL(pageUrl, window.location.href).pathname.toLowerCase() ===
    currentPagePath
);

function prevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    navigateToPage();
  }
}

function nextPage() {
  if (currentPageIndex >= 0 && currentPageIndex < pageUrls.length - 1) {
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
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = currentYear;
}

//slideshow code
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slides.length === 0) {
    return;
  }

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
  setTimeout(showSlides, 3000);
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

//anchorpaycheckcode
const payCheckImageMob = document.getElementById("payCheckImageMob");
if (payCheckImageMob) {
  payCheckImageMob.addEventListener("click", function () {
    this.classList.toggle("fullscreen");
  });
}

//scrollToSection
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }
}
