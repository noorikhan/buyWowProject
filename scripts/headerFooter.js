import nav from "/components/navbar.js";
let hearder = document.querySelector("header");
hearder.innerHTML = nav();

let cart = document.getElementById("cart");

cart.addEventListener("click", openNav);
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

let close = document.getElementById("close");
close.addEventListener("click", closeNav);

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let search = document.getElementById("search");

search.addEventListener("click", openSearch);

function openSearch() {
  document.getElementById("mySearchnav").style.height = "179px";
}

let remove = document.getElementById("remove");
remove.addEventListener("click", closeSearch);

function closeSearch() {
  document.getElementById("mySearchnav").style.height = "0";
}

import footerPart from "/components/footer.js";
let footer = document.querySelector("footer");
footer.innerHTML = footerPart();
