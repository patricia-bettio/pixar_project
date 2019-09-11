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

//2- adding functions to display data
let allDecades = [];

function showData(data){
    //console.log(data);

    data.feed.entry.forEach(saveTitle);
     console.log(allDecades);
    allDecades.forEach(newTitle);
    data.feed.entry.forEach(oneMovie);
}


//3- Save single category into an array
function saveTitle(decades){
    //console.log(decades.gsx$decade.$t);
    //Make an array of all decades where each one only exists once and as long the file is not empty
    if(allDecades.includes(decades.gsx$decade.$t) == false){
        allDecades.push(decades.gsx$decade.$t);
    }


}


//4- Create categories
function newTitle(decades){
    //console.log(decades.gsx$decade);
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent=decades;
    section.setAttribute("id", "decade-" +decades);
    section.appendChild(header);
    document.querySelector(".movieslist").appendChild(section);
}


//5-basic info
function oneMovie(item){

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".movie_title").textContent=item.gsx$filmname.$t;
    copy.querySelector(".short_description").textContent=item.gsx$shortsdescription.$t;
    console.log(item.gsx$decade.$t);

    document.querySelector("#decade-" +item.gsx$decade.$t).appendChild(copy);

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







