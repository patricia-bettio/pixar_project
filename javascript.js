//1- fetch data
const link =
  "https://spreadsheets.google.com/feeds/list/1rQ35b5jjrtd8MWp_J8qy2OFWwCdIaUxJMOn-aTHxDwk/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);
}

//2- first interaction - how-to find each element
function showData(data) {
  data.feed.entry.forEach(oneMovie);
}

function oneMovie(item){
    console.log(item.gsx$starrating.$t)
}
