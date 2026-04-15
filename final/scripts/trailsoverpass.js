//doesn't work, needs actual area code from site, not geocodeArea prompt
async function fetchBikeRoutes() {
  const query = `
    [out:json][timeout:50];

    // Create areas for each city
    {{geocodeArea:"Willard, Utah"}}->.willard;
    {{geocodeArea:"Perry, Utah"}}->.perry;

    // Combine them
    (.willard;.perry;)->.searchArea;

    (
    way(area.searchArea)["highway"="cycleway"](if:length() < 50000);
    way(area.searchArea)["cycleway"](if:length() < 50000);
    way(area.searchArea)["cycleway:left"](if:length() < 50000);
    way(area.searchArea)["cycleway:right"](if:length() < 50000);
    way(area.searchArea)["bicycle"~"yes|designated|permissive"](if:length() < 50000);
    way(area.searchArea)["highway"~"path|track|footway"]["bicycle"](if:length() < 50000);
    relation(area.searchArea)["route"="bicycle"](if:length() < 50000);
    );

    out geom;
    `;

    try {
        const response = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // if works, display here
}


fetchBikeRoutes();
