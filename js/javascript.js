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
var AllData;

function showData(data) {
    AllData = data.feed.entry;
    data.feed.entry.forEach(saveTitle);
    console.log(allDecades);
    allDecades.forEach(newTitle);
    data.feed.entry.forEach(oneMovie);
    addClickListener();
}


//3- Save single category into an array
function saveTitle(decades) {
    //console.log(decades.gsx$decade.$t);
    //Make an array of all decades where each one only exists once and as long the file is not empty
    if (allDecades.includes(decades.gsx$decade.$t) == false) {
        allDecades.push(decades.gsx$decade.$t);
    }


}


//4- Create categories
function newTitle(decades) {
    //console.log(decades.gsx$decade);
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent = decades;
    section.setAttribute("id", "decade-" + decades);
    section.appendChild(header);
    document.querySelector(".movieslist").appendChild(section);
}


//5-basic info
function oneMovie(item) {

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".movie_title").textContent = item.gsx$filmname.$t;
    copy.querySelector(".short_description").textContent = item.gsx$shortsdescription.$t;
    copy.querySelector(".movie_img").setAttribute("src", "imgs/" + item.gsx$image.$t);
    /* copy.querySelector(".modal-description").textContent = item.gsx$longdescription.$t;
     copy.querySelector(".modal-bg").classList.add("desc-id-" + item.gsx$b.$t);
     copy.querySelector(".modalbutton").setAttribute("data-id", item.gsx$b.$t);*/
    //console.log(item.gsx$decade.$t);
    copy.querySelector(".modalbutton").setAttribute("data-id", item.gsx$b.$t)
    document.querySelector("#decade-" + item.gsx$decade.$t).appendChild(copy);

}

//6 add click listeners to modal buttons
function addClickListener() {
    document.querySelectorAll(".modalbutton").forEach(btn => {
        //btn.addEventListener("click", toggleModalDesc);
        btn.addEventListener("click", showModal);
    });
}

function showModal(e) {
    modal.classList.remove('hide');
    const id = e.target.getAttribute('data-id');
    console.log(AllData);
    console.log(AllData[id - 1].gsx$filmname.$t)
    modal.querySelector(".modal-title").textContent = AllData[id - 1].gsx$filmname.$t;
    modal.querySelector(".modal-description").textContent = AllData[id - 1].gsx$longdescription.$t;
    modal.querySelector(".modal-budget").textContent = AllData[id - 1].gsx$budget.$t;
    modal.querySelector(".modal-image").setAttribute("src", "imgs/" + AllData[id - 1].gsx$image.$t);
    //modal.querySelector(".modal-description").textContent = e.longdescription;
    //modal.classList.remove("hide");*/

}

/*function toggleModalDesc(evt) {
    const id = evt.currentTarget.dataset.id
    document.querySelector(".desc-id-" + id).classList.toggle("hide");
    document.querySelectorAll('.modal-bg').forEach(btn => {
        btn.addEventListener("click", hideModal);
    });
}*/

//close the modal when clicked
const modal = document.querySelector(".modal-background");

modal.addEventListener("click", () => {
    modal.classList.add("hide");
});







/*function showDish(dish) {
    //...
    copy.querySelector("button").addEventListener("click", () => {
        fetch(` https://spreadsheets.google.com/feeds/list/1rQ35b5jjrtd8MWp_J8qy2OFWwCdIaUxJMOn-aTHxDwk/od6/public/values?alt=json=${dish.id}`)
            .then(res => res.json())
            .then(showDetails);
    });
}

//once we have our data, ....
function showDetails(data) {
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-description").textContent = data.longdescription;
    //...
    modal.classList.remove("hide");
}
*/
