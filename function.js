const menuButton = document.querySelector(".menu-button");

let showMenu = false;
menuButton.addEventListener("click", toggolmenu);

//function
function toggolmenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    showMenu = false;
  }
}

function openMenu() {
  document.body.classList += " menu--open"
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}





// The best way to code is to build something meaningful from scratch'


//how to create a hamburger menu?

