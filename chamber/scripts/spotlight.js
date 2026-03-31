const url = "https://origamijellybean.github.io/wdd231/chamber/data/spotlights.json";

const spotlight = document.querySelector('#spotlight');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    // generateSpotlights(spotlight);
    displayData(data.companies);
}

function displayData(companies) {
    let spotlighthtml = "";
    companies.forEach(company => {
        spotlighthtml +=
                `<section>
                    <h3>${company.name}</h3>
                    <aside>
                        <img src="${company.image}" alt="${company.name} logo" loading="lazy" width="200" height="200" class="companyImage">
                    </aside>
                    <ul>
                        <li>${company.meeting}</li>
                        <li>Current ${company.current}</li>
                        <li>Call or text at ${company.phone} or visit ${company.companyurl} for details</li>
                    </ul>
                </section>`;
    });

    spotlight.innerHTML = spotlighthtml;
}

// function generateSpotlights(spotlight) {
//     //keep list of 3 companies
// }


getData();