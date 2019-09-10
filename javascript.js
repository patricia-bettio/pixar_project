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
/*function showData(data) {
  data.feed.entry.forEach(oneMovie);
}



function oneMovie(item){
    console.log(item.gsx$starrating.$t)
}
*/


//3- showing basic info: movie details/name

function showData(data){


    data.feed.entry.forEach(createCategories);
    data.feed.entry.forEach(oneMovie);
}




function oneMovie(item){
    console.log(item);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".movie_title").textContent=item.gsx$filmname.$t;
    copy.querySelector(".short_description").textContent=item.gsx$shortsdescription.$t;
    document.querySelector(".movieslist").appendChild(copy);
}




//4- Create categories + assign each Item to its category



function createCategories(category){

    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent=category.gsx$decade.$t;
    section.setAttribute("id", category.gsx$decade.$t);
    section.appendChild(header);
    document.querySelector("main").appendChild(section);
}







