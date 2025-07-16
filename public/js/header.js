let isMenuOpen = false;

function toggleMenu() {
  const nav = document.querySelector(".main-nav");
  isMenuOpen = !isMenuOpen;
  nav.classList.toggle("open", isMenuOpen);

  const menuIcon = document.getElementById("menu-icon");
  menuIcon.src = isMenuOpen ? "/icons/x.svg" : "/icons/menu.svg";
}

function closeMenu() {
  const nav = document.querySelector(".main-nav");
  nav.classList.remove("open");
  isMenuOpen = false;
  document.getElementById("menu-icon").src = "/icons/menu.svg";
}

// Opcional: cerrar menú si haces clic fuera
document.addEventListener('click', (e) => {
  const nav = document.querySelector(".main-nav");
  const toggleBtn = document.querySelector(".menu-toggle");
  if (isMenuOpen && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeMenu();
  }
});
