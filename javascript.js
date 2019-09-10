//1- fetch data
const link =
  "https://spreadsheets.google.com/feeds/list/1rQ35b5jjrtd8MWp_J8qy2OFWwCdIaUxJMOn-aTHxDwk/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);
}

//example first interaction - how-to find each element
/*function showData(data) {
  data.feed.entry.forEach(oneMovie);
}
function oneMovie(item){
    console.log(item.gsx$starrating.$t)
}
*/

//3- adding functions to display data

function showData(data){
    data.feed.entry.forEach(oneMovie);
    data.feed.entry.forEach(newTitle);
}

//4- Create categories **needs review: match decades wuth gsx$decade...

function newTitle(decades){
    console.log(decades.gsx$decade.$t);
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent=decades.gsx$decade.$t;
    section.setAttribute("id", decades.gsx$decade.$t);
    section.appendChild(header);
    document.querySelector("main").appendChild(section);
}

//3-basic info
function oneMovie(item){

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".movie_title").textContent=item.gsx$filmname.$t;
    copy.querySelector(".short_description").textContent=item.gsx$shortsdescription.$t;


    document.querySelector(".movieslist").appendChild(copy);

    /*EDIT
    copy.querySelector("button").addEventListener("click", () => {
    fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
      .then(res => res.json())
      .then(showDetails);
  });
  */

}


//Modal

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

function showDetails(data) {
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-description").textContent = data.long_description;
    modal.classList.remove("hide");

}





