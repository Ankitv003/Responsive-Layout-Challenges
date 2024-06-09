const navbarToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navbarToggle.addEventListener("click", function () {
  nav.classList.toggle("nav--visible");
});
