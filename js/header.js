/* ============================================
   header.js — mobile navigation toggle
   ============================================ */

function initHeader() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-header-toggle]");
  const mobile = document.querySelector("[data-header-mobile]");
  const links = mobile ? mobile.querySelectorAll("a") : [];

  if (!toggle || !mobile) return;

  const setOpen = (open) => {
    const isOpen = open;
    toggle.setAttribute("aria-expanded", String(isOpen));
    mobile.classList.toggle("is-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));

  // Close on ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  // Add subtle shadow on scroll
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", initHeader);