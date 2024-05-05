
const navBars = document.getElementById("navBars");
const navLinks = document.getElementById("navLinks");


navBars.addEventListener("click", () => {
    navLinks.classList.toggle("active");

})