const link =
  "https://spreadsheets.google.com/feeds/list/2PACX-1vSWhrxgk0RztP15KzpGGO8LeIXIDsCQtHTPYiWQtYakJUasjoZ3gtea1j7T0LwEmXsOAlRD-1kgWC-j/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
}
getData();
