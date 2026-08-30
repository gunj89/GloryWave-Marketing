const menuButton = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove("active");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => window.innerWidth > 760 && closeMenu());
}
