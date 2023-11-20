// HAMBURGER MENU

document.body.classList.toggle("js-enabled");

document.addEventListener("DOMContentLoaded", function (event) {
  let hamburger = document.querySelector(".hamburger-icon");
  // If JS is enabled, it will un-expand the hamburger
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.onclick = function () {
    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  };
});

document.addEventListener("DOMContentLoaded", function (event) {
  let hamburger = document.querySelector(".hamburger-icon");
  let menu = document.querySelector(".menu-links");

  hamburger.setAttribute("aria-expanded", "false");

  function toggleMenu() {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute("aria-expanded", isOpen ? "false" : "true");

    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  hamburger.onclick = toggleMenu;

  // Make button clickable
  document.querySelectorAll(".menu-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (hamburger.getAttribute("aria-expanded") === "true") {
        toggleMenu();
      }
    });
  });
});
