const url = "https://origamijellybean.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector('#cards');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayData(data.companies);
}

function displayData(companies) {
    prophets.forEach((company) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const phone = document.createElement("p");
        const companyurl = document.createElement("p");
        name.innerHTML = `${company.name}`;
        portrait.setAttribute("src", company.image);
        portrait.setAttribute("alt", `Image for ${company.name}.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "340");
        phone.innerHTML = `Phone Number: ${company.phone}`;
        companyurl.innerHTML = `Company Website: ${company.companyurl}`;
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(image);
        card.appendChild(image);
        cards.appendChild(card);
    });
}

getData();


