/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("header").style.marginRight = "400px";
}

/* Set the width of the side navigation to 0 and the Right margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("header").style.marginRight = "0";
}

function drop() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("show");
}
