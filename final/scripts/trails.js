async function fetchBikeRoutes() {

    try {
        const response = await fetch("data/trails.json");
        if (response.ok) {
            const data = await response.json();
            console.log(data.routes);
            displayResults(data.routes);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const trailsMain = document.querySelector("main");
    let trailsHTML = ``;
    data.forEach(route => {
        trailsHTML += `<section class="route">
        <h2>${route.name}</h2>
        <p>Distance: ${route.distance_mi} mi</p>
        <p>Location: ${route.location}</p>
        <p>Elevation Loss: ${route.elevation_down_ft} ft</p>
        <p>Elevation Gain: ${route.elevation_up_ft} ft</p>
        <a href="${route.link}" target="_blank">Visit on bikemap.net</a>
        </section>`
    });
    trailsMain.insertAdjacentHTML("beforeend", trailsHTML);
}


fetchBikeRoutes();