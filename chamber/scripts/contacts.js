const url = "https://origamijellybean.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector('#cards');
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
    // companies.forEach((company) => {

    //     const card = document.createElement("section");
    //     const name = document.createElement("h2");
    //     const image = document.createElement("img");
    //     const phone = document.createElement("p");
    //     const companyurl = document.createElement("p");
    //     const member_level = document.createElement("p");
    //     name.innerHTML = `${company.name}`;
    //     image.setAttribute("src", company.image);
    //     image.setAttribute("alt", `Image for ${company.name}.`);
    //     image.setAttribute("loading", "lazy");
    //     image.setAttribute("width", "200");
    //     image.setAttribute("height", "200");
    //     image.classList.add("companyImage");
    //     phone.innerHTML = `<strong>Phone Number:</strong> ${company.phone}`;
    //     companyurl.innerHTML = `<strong>Company Website:</strong> ${company.companyurl}`;
    //     member_level.innerHTML = `<strong>Membership Level:</strong> ${company.member_level}`;
    //     card.appendChild(name);
    //     card.appendChild(phone);
    //     card.appendChild(companyurl);
    //     card.appendChild(member_level);
    //     card.appendChild(image);
    //     cards.appendChild(card);
    // });
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