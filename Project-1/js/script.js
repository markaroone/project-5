"use strict";

const toggleButtonEl = document.querySelector(".toggle-button");
const navBarLinksEl = document.querySelector(".navbar-links");
const faqAccordionEl = document.querySelectorAll(".faq-accordion");
const faqIconEl = document.querySelector("faq-icon");
const allLinks = document.querySelectorAll("a:link");

// Mobile Navigation
toggleButtonEl.addEventListener("click", () => {
  navBarLinksEl.classList.toggle("active");
});

// FAQ Section Accordion
for (const [key, _] of faqAccordionEl.entries()) {
  faqAccordionEl[key].addEventListener("click", () => {
    faqAccordionEl[key].classList.toggle("open");
    faqAccordionEl[key].classList.toggle("invert-icon");
  });
}

// Smooth Scrolling Animation
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
