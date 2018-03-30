$(document).ready(function() {

    // array of anime
let anime = ["Cowboy Bebop", "Dragonball Z", "Sailormoon", "Naruto", "One Piece", "Fullmetal Alchemist: Brotherhood", "Bleach", "Pokemon", "Kill la Kill"];

//capture anime name from submit button attribute & print out anime name


function renderButtons() {

    //delete current buttons and replace with new buttons
    $("#animeButtons").empty();

    for (var i = 0; i < anime.length; i++) {

       // generate a new button with type and class
        let newbutton = $('<button type="button" class="btn btn-info">');

        //assign data-attribute the name of the string in the array
        newbutton.attr("data-name", anime[i]);

        //assign the name of the button = string in the array
        newbutton.text(anime[i]);
    
        //append the button to the div
        $("#animeButtons").append(newbutton);

        //create spacing of button in html
        newbutton.css({"margin": "5px"});
    }

}

//events

//this handles the event submit click
$("#addAnime").on("click", function(event){
    //prvent form from trying to submit itself
    event.preventDefault();

    //create a variable for the form input
    let animeInput = $("#anime-input").val().trim();


    //add form input into array
    anime.push(animeInput);

    //call render buttons to create a new button based off of input
    renderButtons();
})

//$(document).on("click", ".anime-btn", displayAnime);

//display initial buttons
renderButtons();


});