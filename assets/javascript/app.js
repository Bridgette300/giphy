$(document).ready(function() {

    // array of anime
let anime = ["Cowboy Bebop", "Dragonball Z", "Sailormoon", "Naruto", "One Piece", "Fullmetal Alchemist: Brotherhood", "Bleach", "Pokemon", "Kill la Kill"];

//capture anime name from submit button attribute & print out anime name
function animeName() {
    let aName = $(this).attr("data-name");
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + aName + "&api_key=EFMrrRT2uCQGsGGwxiSQ6pKBtrBNExmJ&limit=10";

    //AJAX CALL


    $.ajax({
        url: queryURL,
        methodL: "GET"
    }).then(function(giphy) {

        let rating = giphy.rating;
        let gif = giphy.images.fixed_width.url;
        let img = giphy.images.fixed_width_still.url;

        $('#anime').append(img);

    });
}

//this function renders the buttons

function renderButtons() {

    $("#animeButtons").empty();

    for (var i = 0; i < anime.length; i++) {

        let newbutton = $('<button type="button" class="btn btn-info">');

        newbutton.attr("dataname", anime[i]);

        newbutton.text(anime[i]);

        $("#animeButtons").append(newbutton);
        newbutton.css({"margin": "5px"});
    }

}

//events

//this  handles the event submit click

$("#submit").on("click", function(event){

    event.preventDefault();

    let animeInput = $("#anime-input").val().trim();

    //add new anime to the array
    anime.push(animeInput);

    //call render buttons to process the array
    renderButtons();
})

$(document).on("click", ".anime", animeName);

//display initial buttons
renderButtons();


});