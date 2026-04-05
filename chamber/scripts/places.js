import { places } from "../data/discover.mjs";
console.log(places);


function displayPlaces() {
    places.forEach((place) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const photo = document.createElement("img");
        const address = document.createElement("p");
        const description = document.createElement("p");
        name.innerHTML = `${place.name}`;
        photo.setAttribute("src", place.image);
        photo.setAttribute("alt", `Picture of ${place.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "300");
        photo.setAttribute("height", "200");
        address.innerHTML = `${place.address}`;
        address.setAttribute("class", "placeAddress");
        description.innerHTML = `${place.description}`;
        description.setAttribute("class", "placeDescription");
        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(address);
        card.appendChild(description);
        discover.appendChild(card);
    });
}
displayPlaces()