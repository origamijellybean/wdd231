let visitDates = JSON.parse(localStorage.getItem("visitDates")) || [];
const welcome = document.querySelector("#welcome");
const date = new Date();
visitDates.push(Date.now());
localStorage.setItem("visitDates", JSON.stringify(visitDates));
if (visitDates.length == 1) {
    welcome.innerHTML = `Welcome! Let us know if you have any questions.`;
} else {
    let visitDistance = (visitDates[visitDates.length - 1] - visitDates[visitDates.length - 2]) / 86400000;
    if (visitDistance < 1) {
        welcome.innerHTML = `Back so soon! Awesome!`;
    } else {
        welcome.innerHTML = `You last visited ${visitDistance} days ago.`;
    }
}

