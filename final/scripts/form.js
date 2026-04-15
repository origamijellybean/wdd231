const myInfo = new URLSearchParams(window.location.search);
function addResults() {
    results = document.querySelector("#results");
    results.innerHTML = `
    <h2>Your Info</h2>
    <p>Name: ${myInfo.get("first")} ${myInfo.get("last")}</p>
    <p>Your phone: ${myInfo.get("phone")}</p>
    <p>Your email: ${myInfo.get("email")}</p>
    `;
}