$(document).ready(function() {

    // array of anime
let anime = ["Cowboy Bebop", "Dragonball Z", "Sailormoon", "Naruto", "One Piece", "Fullmetal Alchemist: Brotherhood", "Bleach", "Pokemon", "Kill la Kill"];

//capture anime name from submit button attribute & print out anime name
function animeName() {
    let aName = $(this).attr("data-name");
    console.log(aName);
}

//this function renders the buttons

function renderButtons() {

    $("#animeButtons").empty();

    for (var i = 0; i < anime.length; i++) {

        let newbutton = $('<button type="button" class="btn btn-info">');

        newbutton.attr("dataname", anime[i]);

        newbutton.text(anime[i]);

        $("#animeButtons").append(newbutton);

    }

}

//events

//this function handles the event submit click

$("#submit").on("click", function(event){

    event.preventDefault();

    let animeInput = $("anime-input").val().trim();

    anime.push(animeInput);
})


});