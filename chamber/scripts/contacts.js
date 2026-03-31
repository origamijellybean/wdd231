const url = "https://origamijellybean.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector('.cards');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayData(data.companies);
}

function displayData(companies) {
    let companieshtml = "";
    companies.forEach(company => {
        companieshtml += `<section>
            <h2>${company.name}</h2>
            <p><strong>Phone Number:</strong> ${company.phone}</p>
            <p><strong>Company Website:</strong> ${company.companyurl}</p>
            <p><strong>Membership Level:</strong> ${company.member_level}</p>
            <img src="${company.image}" alt="Image for ${company.name}." loading="lazy" width="200" height="200" class="companyImage">
        </section>`;
    });

    cards.innerHTML = companieshtml;
}

getData();

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
grid.addEventListener("click", () => {
    grid.classList.add("active");
    list.classList.remove("active");
    cards.classList.add("grid");
    cards.classList.remove("list");
});

list.addEventListener("click", () => {
    list.classList.add("active");
    grid.classList.remove("active");
    cards.classList.add("list");
    cards.classList.remove("grid");
});