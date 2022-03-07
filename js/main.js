const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".hamb-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  Menu.classList.toggle("active");
})

