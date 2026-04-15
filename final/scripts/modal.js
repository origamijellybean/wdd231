const modal = document.querySelector("#websiteLeaving");
const okay = document.querySelector("#okay");
const exit = document.querySelector("#exit");

const links = document.querySelectorAll(".confirm");
let pendingLink = "";
links.forEach(link => {
    
    link.addEventListener("click", (event) => {
        event.preventDefault();
        pendingLink = link.href;
        modal.showModal();
    });
});

okay.addEventListener("click", () => {
    modal.close();
    if (pendingLink.length) {
        window.open(pendingLink, "_blank");
    }
});

exit.addEventListener("click", () => {
    modal.close();
    pendingLink = "";
});
