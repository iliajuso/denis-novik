const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector(".hamburger_menu");
const closeMenu = document.querySelector(".close_menu");
const menuLinks = document.querySelectorAll(".menu_link");
hamburgerMenu.addEventListener('click', show);
closeMenu.addEventListener("click", close);
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    close();
  });
});
function show() {
    menu.style.display = "flex";
    menu.style.top = "0"
}
function close() {
    menu.style.top = "-100%"
}