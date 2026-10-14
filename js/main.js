/* main.js — Stage 1
   Only two jobs: (1) mobile menu toggle, (2) footer year.
   The site works without JS: the nav simply stays visible.
*/
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    // Open / close via the hamburger button
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close after tapping any nav link
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    // Close with the Escape key and return focus to the button
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Keep the footer year current
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
