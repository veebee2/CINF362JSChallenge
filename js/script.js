// ---------------- FILTERS ----------------
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

if (filterButtons.length > 0 && cards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.textContent.toLowerCase();

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else if (filter === "visited" && card.dataset.type === "visited") {
          card.style.display = "block";
        } else if (filter === "want to go" && card.dataset.type === "future") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

    });
  });
}


// ---------------- TOGGLES ----------------
const toggles = document.querySelectorAll(".toggle-btn");

if (toggles.length > 0) {
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
   const arrow = btn.querySelector(".arrow");

    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    if (arrow) arrow.textContent = isOpen ? "+" : "–";
    });
  });
}


// ---------------- GENERIC CAROUSELS ----------------
const carousels = document.querySelectorAll(".carousel");

if (carousels.length > 0) {
  carousels.forEach(carousel => {
    let index = 0;

    const slides = carousel.querySelectorAll(".slide");
    const next = carousel.querySelector(".next");
    const prev = carousel.querySelector(".prev");

    function showSlide(i) {
      slides.forEach(s => s.classList.remove("active"));
      slides[i].classList.add("active");
    }

    if (slides.length > 0 && next && prev) {
      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      });

      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      });
    }
  });
}


// ---------------- FIELD NOTES ----------------
// Get references to important HTML elements
// textarea where the user types
const input = document.getElementById("notesInput");

// paragraph/span that displays the character count
const count = document.getElementById("charCount");

// button used to clear the textarea
const clearBtn = document.getElementById("clearBtn");


// Make sure the textarea and counter exist before running the code
if (input && count) {

  // Listen for whenever the user types in the textarea
  input.addEventListener("input", () => {

    // Store the current number of characters typed
    const length = input.value.length;

    // Update the counter text on the page
    count.textContent = `${length} / 300`;

    // If the user is getting close to the limit,
    // change the counter color to red as a warning
    if (length > 250) {
      count.style.color = "red";
    } else {

      // Otherwise keep the counter gray
      count.style.color = "#666";
    }
  });
}


// Make sure all elements exist before adding clear button functionality
if (clearBtn && input && count) {

  // Listen for when the clear button is clicked
  clearBtn.addEventListener("click", () => {

    // Remove all text from the textarea
    input.value = "";

    // Reset the character counter back to 0
    count.textContent = "0 / 300";
  });
}




// ---------------- HERO CAROUSEL ----------------
const heroSlides = document.querySelectorAll(".hero-slide");
const heroNext = document.querySelector(".hero-next");
const heroPrev = document.querySelector(".hero-prev");

let heroIndex = 0;

function showHeroSlide(i) {
  heroSlides.forEach(s => s.classList.remove("active"));
  heroSlides[i].classList.add("active");
}

if (heroSlides.length > 0 && heroNext && heroPrev) {
  heroNext.addEventListener("click", () => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  });

  heroPrev.addEventListener("click", () => {
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroIndex);
  });
}