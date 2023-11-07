const DOMSelectors = {
    form: document.querySelector("form"),
    Artist: document.querySelector("Artist"),
    Song: document.querySelector("Song"),
    Show: document.querySelector("Show"),
    Anything: document.querySelector("Anything"),
    Card: document.querySelector("card"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.createcard();
    clearvalues();
    deletecard();
});

function createcard (){
    let a = DOMSelectors.Artist.value
    let b = DOMSelectors.Song.value
    let c = DOMSelectors.Show.value
    let d = DOMSelectors.Anything.value
    DOMSelectors.Card.insertAdjacentElement("beforeend",
    `<div class="RECS">
    <h3> Recommneded Artist${a}</h3>
    <h3> Recommended Song: ${b}</h3>
    <h3> Recommneded Show: ${c}</h3>
    <h3> Recommneded Anything: ${d}</h3>
    <button class="clearButton">delete</button>
    </div>`);
};

function clearvalues (){
    DOMSelectors.Artist.value = ("");
    DOMSelectors.Song.value = ("");
    DOMSelectors.Show.value = ("");
}