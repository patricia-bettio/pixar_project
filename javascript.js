const link =
  "https://spreadsheets.google.com/feeds/list/1rQ35b5jjrtd8MWp_J8qy2OFWwCdIaUxJMOn-aTHxDwk/od6/public/values?alt=json";
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
