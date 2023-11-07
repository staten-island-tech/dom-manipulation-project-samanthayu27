const DOMSelectors = {
    form: document.querySelector('#form'),
    Artist: document.querySelector("#Artist"),
    Song: document.querySelector("#Song"),
    Show: document.querySelector("#Show"),
    Anything: document.querySelector("#Anything"),
    Card: document.querySelector("#card"),
};
// declares all the varibles used in the code and their "names"

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    createcard();
    clearvalues();
    deletecard();
});
// declares all the fucntions that will happen(?)

function createcard (){
    let a = DOMSelectors.Artist.value;
    let b = DOMSelectors.Song.value;
    let c = DOMSelectors.Show.value;
    let d = DOMSelectors.Anything.value;
    //declares the new "names" for the inputs 
    DOMSelectors.Card.insertAdjacentHTML("beforeend",
    `<div class="RECS">
    <h3> Artist: ${a}</h3>
    <h3> Song: ${b}</h3>
    <h3> Show: ${c}</h3>
    <h3> Anything: ${d}</h3>
    <button class="delete">Delete</button>
    </div>`);
};//this is the new format for the things in the code 

function deletecard (){
    const deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach(function(button){
        button.addEventListener("click",function(){
            button.parentElement.remove ();
        });
    });
};

function clearvalues (){
    DOMSelectors.Artist.value = ("");
    DOMSelectors.Song.value = ("");
    DOMSelectors.Show.value = ("");
    DOMSelectors.Anything.value = ("");
};
//sets everything to blank wehn sumbmitted