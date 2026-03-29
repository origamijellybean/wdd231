const infoString = window.location.search;
const myInfo = new URLSearchParams(window.location.search);
results = document.querySelector("#results");
results.innerHTML = `
<h2>Your Information:</h2>
<p>Name: ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Title: ${myInfo.get("title")}
<p>Organization: ${myInfo.get("organization")}</p>
<p>Description: ${myInfo.get("description")}</p>
<p>Your phone: ${ myInfo.get("phone") }</p>
<p>Your email: ${myInfo.get("email")}</p>
<p>Membership Level: ${myInfo.get("membership")}</p>
<p>Time: ${myInfo.get("timestamp")}</p>
`;