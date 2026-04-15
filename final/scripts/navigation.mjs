export const navButton = document.querySelector("#nav-button");
export const navBar = document.querySelector("#nav-bar");
export const body = document.querySelector("body");
export function addNavButton() {
    navButton.addEventListener("click", () => {
        navButton.classList.toggle("show");
        navBar.classList.toggle("show");
        body.classList.toggle("hide");
    });
}
addNavButton();