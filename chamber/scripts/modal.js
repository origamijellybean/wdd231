const sections = document.querySelectorAll("#membership-levels > section");
const dialogs = document.querySelectorAll("#membership-levels > dialog");

sections.forEach((section, index) => {
    const dialog = dialogs[index];
    const openDialog = section.querySelector("button");
    const closeDialog = dialog.querySelector(".closeDialog");
    openDialog.addEventListener("click", () => {
        dialog.showModal();
    })

    closeDialog.addEventListener("click", () => {
        dialog.close();
    });
});