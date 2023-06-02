import 'regenerator-runtime'; /* for async await transpile */
import '../scripts/component/nav-bar.js';
import '../styles/main.css';

document.addEventListener("DOMContentLoaded", main);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navMenu.classList.toggle("active");
}))