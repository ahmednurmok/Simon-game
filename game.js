console.log("jQuery:", $);

$(document).keydown(function() {
    console.log("Key detected!");
});

var userClickedPattern = []
var gamePattern=[]
//variable with an empty array

var buttonColours= ['red', 'blue', 'green', 'yellow'];


var started = false;
// keep track of whether if the game has started or not, so  nextSequence() is called only after the first keypress - game starts then.

var level = 0;
//Create a new variable called level and start at level 0.


$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
//3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0". (h1 class + level which pre defined as 0 - if it starts)




function nextSequence() { 
    level ++;
    userClickedPattern = []; // resets the userClickedPattern to an empty array ready for the next level.
    $("#level-title").text("Level " + level);
   
    var randomNumber = Math.floor(Math.random() * 4);


var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);}
//attaches class with the random chosen colour (e.g. blue, then selects the blue button). fade is to add desired affect for the game

//var audio = new Audio("sounds/" + randomChosenColour + ".mp3");  audio.play();playSound(randomChosenColour);}

//All happens simultaneously - green is random button, it fades, then the audip plays?  The AUDIO FILE NAME IS THE SAME AS BUTTON COLOUR

// level ++ increments the level each time someone moves on a level. level title is changed to match level, e.g. level 1 or leverl


$(".btn").on("click", function() {
 var userChosenColour = $(this).attr("id");
 //'this' references the event listener (button clicked and its attribute, e.g. green)
 userClickedPattern.push(userChosenColour);
 playSound(userChosenColour);
 animatePress(userChosenColour);

 checkAnswer(userClickedPattern.length-1);

    });

// this is known as a handler function. userclickedpattern notes all of the clicks
//check answer ensures the answer matches the previous answer (e.g. if 1.red and 2. is red, yellow - checks thats 1st is red)

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


function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
      
        if (userClickedPattern.length === gamePattern.length){
  
          
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
   // If the user got the most recent answer right in step 3, then check that they have finished their sequence, with another if statement to ensure the correct number of sequence is clicked (e.g. 2 buttons for yellow,green), if someone clicks 3 they fail (else)
   // Call nextSequence() - NEXTLEVEL after a 1000 millisecond delay.

      } else {
  
        console.log("wrong");
  
      
    
      playSound('wrong');  //sound

      $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200); //200ms

    $("#level-title").text("Game Over, Press Any Key to Restart");  //restart
    startOver(); //starts game again
}

};

function startOver(){
    level = 0;
  gamePattern = [];
  started = false;   //starts game from scratch
}
