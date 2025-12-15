document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");

    document
      .querySelectorAll(".faq-item.open")
      .forEach((i) => i.classList.remove("open"));

    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Menu hamburger mobile
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenuFn() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Vérification que les éléments existent
if (hamburger && mobileMenu && mobileOverlay && closeMenu) {
  // Ouvrir le menu
  hamburger.addEventListener("click", openMenu);

  // Fermer avec le bouton X
  closeMenu.addEventListener("click", closeMenuFn);

  // Fermer en cliquant sur l'overlay
  mobileOverlay.addEventListener("click", closeMenuFn);

  // Fermer au clic sur un lien interne
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        closeMenuFn();
      }
    });
  });
}
