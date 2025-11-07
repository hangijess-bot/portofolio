// Menu mobile
const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Formulaire (exemple simple)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Merci pour votre message, Jessica vous répondra bientôt !");
});