const infoString = window.location.search;
const myInfo = new URLSearchParams(window.location.search);
results = document.querySelector("#results");
results.innerHTML = `
<p>Your Information:</p>
<p>Name: ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Organization Information: ${myInfo.get("title")} of ${myInfo.get("date")} of the ${myInfo.get("organization")}.</p>
<p>Organization Description: ${myInfo.get("description")}</p>
<p>Your phone: ${ myInfo.get("phone") }</p>
<p>Your email: ${myInfo.get("email")}</p>
<p>Memebership Level: ${myInfo.get("membership")}</p>
`;