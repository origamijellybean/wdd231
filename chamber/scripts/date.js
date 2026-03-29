const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();
currentyear.innerHTML = `© <span>${today.getFullYear()} Tyson Hunter, Utah</span>`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const timestamp = document.getElementById("timestamp");
if (timestamp) {
    const time = new Date();
    timestamp.value = time.toLocaleString();
}