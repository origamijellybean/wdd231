const url = "https://origamijellybean.github.io/wdd231/chamber/data/spotlights.json";

const spotlightSection = document.querySelector('#spotlight');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    spotlightList = generateSpotlights(data.companies);
    displayData(spotlightList);
}

function displayData(spotlights) {
    let spotlighthtml = "";
    spotlights.forEach(spotlight => {
        spotlighthtml +=
                `<section>
                    <h3>${spotlight.name}: ${calculateMembership(spotlight.member_level)} membership</h3>
                    <aside>
                        <img src="${spotlight.image}" alt="${spotlight.name} logo" loading="lazy" width="200" height="200" class="companyImage">
                    </aside>
                    <ul>
                        <li>${spotlight.meeting}</li>
                        <li>Current ${spotlight.current}</li>
                        <li>Call or text at ${spotlight.phone} or visit ${spotlight.companyurl} for details</li>
                    </ul>
                </section>`;
    });

    spotlightSection.innerHTML = spotlighthtml;
}

function generateSpotlights(companyList) {
    let spotlightCompanies = companyList;
    while (spotlightCompanies.length > 3) {
        spotlightCompanies.splice(Math.floor(Math.random() * spotlightCompanies.length), 1);
    }
    return spotlightCompanies;
}

function calculateMembership(membership) {
    switch (membership) {
        case 3:
            return "Gold";
        case 2:
            return "Silver";
        case 1:
            return "Bronze";
        case 0:
            return "Non-Profit";
        default:
            return "None";
    }
}
getData();