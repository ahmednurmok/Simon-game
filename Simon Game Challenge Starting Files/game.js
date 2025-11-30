var userClickedPattern = []
var gamePattern=[]
//variable with an empty array

var buttonColours= ['red', 'blue', 'green', 'yellow'];


var started = false;
// keep track of whether if the game has started or not, so  nextSequence() is called only after the first keypress - game starts then.

var level = 0;
//Create a new variable called level and start at level 0.


$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
//3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0". (h1 class + level which pre defined as 0 - if it starts)




function nextSequence() { 
    level ++;
    $("#level-title").text("Level " + level);
    return Math.floor(Math.random() * 4);
    
  
var randomNumber = nextSequence();

var randomChosenColour

randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);}
//attaches class with the random chosen colour (e.g. blue, then selects the blue button). fade is to add desired affect for the game

//var audio = new Audio("sounds/" + randomChosenColour + ".mp3");  audio.play();playSound(randomChosenColour);}

//All happens simultaneously - green is random button, it fades, then the audip plays?  The AUDIO FILE NAME IS THE SAME AS BUTTON COLOUR

// level ++ increments the level each time someone moves on a level. level title is changed to match level, e.g. level 1 or leverl


$("button").on("click", function() {
 var userChosenColour = $(this).attr("id");
 //'this' references the event listener (button clicked and its attribute, e.g. green)
 userClickedPattern.push(userChosenColour);
 playSound(userChosenColour);
    });

// this is known as a handler function. userclickedpattern notes all of the clicks

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
};

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    
    setTimeout( function(){
        $("#" + currentColour).removeClass("pressed")}, 100
    )
};




