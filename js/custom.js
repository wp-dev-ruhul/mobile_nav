// Mouse click effect: Initialize audio for button click
const clickAudio = new Audio("./audio/mouse_click.wav");

// Function to play the click audio
function playClickAudio() {
  clickAudio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
}

// Toggle the visibility of the mobile navigation item
function toggleNav() {
  const navItem = document.querySelector(".mobile_nav_item");
  if (navItem) {
    navItem.classList.toggle("show");
    playClickAudio(); // Play sound on toggle
  }
}

// Close the mobile navigation item
function closeNav() {
  const navItem = document.querySelector(".mobile_nav_item");
  if (navItem) {
    navItem.classList.remove("show");
    playClickAudio(); // Play sound on close
  }
}

// Remove the 'show' class from the navigation item on scroll
window.addEventListener("scroll", () => {
  const navItem = document.querySelector(".mobile_nav_item");
  if (navItem) {
    navItem.classList.remove("show");
  }
});

// Remove the 'show' class on click outside the navigation or the toggle button
document.addEventListener("click", (event) => {
  const navItem = document.querySelector(".mobile_nav_item");
  const toggler = document.querySelector(".nav_bar_btn");

  if (navItem && toggler && !navItem.contains(event.target) && !toggler.contains(event.target)) {
    navItem.classList.remove("show");
  }
});

// Sticky Header Functionality
document.addEventListener("scroll", () => {
  // Select the navigation element by its ID
  const nav = document.querySelector("#mobile_nav");

  // Check if the element exists to prevent errors
  if (nav) {
    // Add or remove the 'sticky' class based on scroll position
    if (window.scrollY > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
});

