// script.js
document.addEventListener("DOMContentLoaded", function () {
  var homeSection = document.getElementById("home");
  var navbar = document.getElementById("navbar");
  var isNavbarSticky = false; // Keep track of the sticky state

  function isSectionVisible() {
    var rect = homeSection.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  function toggleStickyNavbar() {
    var shouldBeSticky = !isSectionVisible();

    if (shouldBeSticky !== isNavbarSticky) {
      isNavbarSticky = shouldBeSticky;

      if (isNavbarSticky) {
        navbar.classList.add("sticky-nav");
      } else {
        navbar.classList.remove("sticky-nav");
      }
    }
  }

  // Initial check in case the page is loaded at a scrolled position
  toggleStickyNavbar();

  // Listen for scroll events
  window.addEventListener("scroll", toggleStickyNavbar);
});
