export const currentyear = document.querySelector("#currentyear");
export const lastModified = document.getElementById("lastModified");
export const today = new Date();
export function addDate() {
    currentyear.innerHTML = `© <span>${today.getFullYear()} Tyson Hunter, Utah</span>`;
    lastModified.innerHTML = `Last Modified: ${document.lastModified}`;
}
addDate();