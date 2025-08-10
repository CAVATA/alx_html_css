
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("hamburger-btn");
  const nav = document.getElementById("site-nav");

  if (!burger || !nav) return;

  function openNav() {
    nav.classList.add("open");
    nav.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    // optionally lock body scroll when menu open
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    nav.classList.remove("open");
    nav.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function (e) {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    if (expanded) closeNav(); else openNav();
  });

  // Close menu when clicking outside the nav or hamburger button
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!nav.classList.contains("open")) return;

    if (!nav.contains(target) && !burger.contains(target)) {
      closeNav();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      closeNav();
    }
  });

  // When resizing to larger screens, ensure nav is visible and state reset
  window.addEventListener("resize", function () {
    if (window.innerWidth > 480) {
      // reset
      nav.classList.remove("open");
      nav.setAttribute("aria-hidden", "false");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    } else {
      // on small screen hide nav initially
      nav.setAttribute("aria-hidden", nav.classList.contains("open") ? "false" : "true");
    }
  });

  // Ensure initial nav state for small screens
  if (window.innerWidth <= 480) {
    nav.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
  } else {
    nav.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "false");
  }
});

