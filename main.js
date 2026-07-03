/* =============================================
   main.js — Simple JavaScript features
   ============================================= */

/* --- Feature 1: Toggle a welcome message ---
   Clicking the button shows or hides a message
   box below it. State is tracked with a boolean. */

function toggleMessage() {
  const box = document.getElementById("js-message");

  // Check whether the box is currently visible
  const isVisible = box.style.display === "block";

  if (isVisible) {
    // Hide the message
    box.style.display = "none";
  } else {
    // Show the message
    box.style.display = "block";
  }
}

/* --- Feature 2: Live character counter for textarea ---
   Updates a counter as the user types, so they
   know how many characters they have written. */

function updateCounter(textareaId, counterId, max) {
  const textarea = document.getElementById(textareaId);
  const counter  = document.getElementById(counterId);

  if (!textarea || !counter) return; // guard: elements may not exist on every page

  // Listen for every keystroke
  textarea.addEventListener("input", function () {
    const used = textarea.value.length;
    counter.textContent = used + " / " + max + " characters";

    // Warn visually when approaching the limit
    counter.style.color = used > max * 0.85 ? "#e53935" : "#9898b8";
  });
}

/* --- Feature 3: Highlight the active nav link ---
   Compares the current page filename to each
   nav link href and adds an "active" class. */

function markActiveNav() {
  const links    = document.querySelectorAll("nav ul a");
  const current  = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    // Extract filename from href (e.g. "about.html")
    const linkFile = link.getAttribute("href").split("/").pop();

    if (linkFile === current) {
      link.classList.add("active");
    }
  });
}

/* --- Run on page load --- */
document.addEventListener("DOMContentLoaded", function () {
  markActiveNav();
  updateCounter("message", "char-count", 300); // only applies on contact page
});
