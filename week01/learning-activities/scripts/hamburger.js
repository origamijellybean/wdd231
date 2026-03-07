const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");
const body = document.querySelector("body");
navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
    body.classList.toggle("hide");
});

