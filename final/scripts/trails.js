let bikeRouteList = [];

async function fetchBikeRoutes() {

    try {
        const response = await fetch("data/trails.json");
        if (response.ok) {
            const data = await response.json();
            console.log(data.routes);
            return data.routes;
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const routeList = document.querySelector("#routes");
    const routeCount = document.querySelector("#routeCount");
    let trailsHTML = ``;
    let trails = 0;
    data.forEach(route => {
        trailsHTML += `<section class="route">
        <h2>${route.name}</h2>
        <p><strong>Distance:</strong> ${route.distance_mi} mi</p>
        <p><strong>Location:</strong> ${route.location}</p>
        <p><strong>Elevation Loss:</strong> ${route.elevation_down_ft} ft</p>
        <p><strong>Elevation Gain:</strong> ${route.elevation_up_ft} ft</p>
        <a href="${route.link}" target="_blank">Visit on bikemap.net</a>
        </section>`;
        trails += 1;
    });
    routeList.innerHTML = trailsHTML;
    routeCount.innerHTML = `Routes in List:<strong> ${trails}</strong>`;
}

function filterRoutes(selectedCity) {
    let filteredList;
    switch (selectedCity) {
        case "all":
            filteredList = bikeRouteList;
            break;
        case "south-of-willard":
            filteredList = bikeRouteList.filter(route => (
                !["South Willard", "Willard", "Perry", "Brigham City", "Tremonton"].some(town =>
                    route.location.startsWith(town))
            ));
            break;
        case "willard-and-north":
            filteredList = bikeRouteList.filter(route => (
                ["South Willard", "Willard", "Perry", "Brigham City", "Tremonton"].some(town =>
                    route.location.startsWith(town))
            ));
            break;
        default:
            filteredList = bikeRouteList.filter(route => (route.location.startsWith(selectedCity)));
            break;
    }
    displayResults(filteredList);
}



fetchBikeRoutes().then(routes => {
    bikeRouteList = routes;
    const filter = document.querySelector("#cityFilter");
    filter.addEventListener("change", (event) => {
        const selectedCity = event.target.value;
        filterRoutes(selectedCity);
    });

    displayResults(bikeRouteList);
    
});

