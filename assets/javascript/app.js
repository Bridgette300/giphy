$(document).ready(function() {

    // array of anime
let anime = ["Cowboy Bebop", "Dragonball Z", "Sailormoon", "Naruto", "One Piece", "Fullmetal Alchemist: Brotherhood", "Bleach", "Pokemon", "Kill la Kill"];

//capture anime name from submit button attribute & print out anime name
function displayAnime() {
    //create a variable that grabs anime attribute name
    let animeName = $(this).attr("data-name");
    //create a variable for api url
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeName + "&api_key=EFMrrRT2uCQGsGGwxiSQ6pKBtrBNExmJ&limit=10";

    
    //AJAX CALL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(giphy) {

        console.log(giphy);

        //empty out anime in area
        $("#anime").empty();
        $('#anime').append('<h5>Click on the gif to see it animate!</h5><br/>');
        

        //cycle through 10 items
        for (let j =  0; j < 10; j++ ) {

        let rating = $("<p>").text('Gif Rating: ' + giphy.data[j].rating);
       // let gif = $("<img>"giphy.images.fixed_width.url;
        let img = $("<img class='anime-gif'>").attr({"src": giphy.data[j].images.fixed_height_still.url, "data-still":  giphy.data[j].images.fixed_height_still.url, "data-animate": giphy.data[j].images.fixed_height.url});
        let newDiv = $("<div>").css({"float": "left", "margin": "5px"});

        $('#anime').append(newDiv);
       
        newDiv.append(rating, img);

     
       

        renderButtons();

        //anime image play function
            $(".anime-gif").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
        });
       
       
        }
       

    });
}


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

$(document).on("click", ".btn", displayAnime);

//display initial buttons
renderButtons();


});