const mobileMenuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", openMobileMenu);

function openMobileMenu() {
  navMenu.classList.toggle("show");
}
