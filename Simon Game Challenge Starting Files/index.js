
var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern =[];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
        $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
  }
});

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);


  checkKarBSDK(userClickedPattern.length-1);
});



function checkKarBSDK(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".



        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]  ){
      console.log("success");
var t= gamePattern.length;
var b = userClickedPattern.length;
      console.log(b);
      console.log(t);

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
if (b === t){        //5. Call nextSequence() after a 1000 millisecond delay.

        setTimeout(function () {

          nextsequence();
        }, 1000);

      }

    } else {

        $("body").addClass("game-over");

        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");

      $(document).keypress(function() {
   level=0;
gamePattern=[];
started = true;
        nextsequence();

      });
    }

}

function nextsequence(){


  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4) ;
  var randomColorChosen = buttonColor[randomNumber];
  gamePattern.push(randomColorChosen);

  $("#"+randomColorChosen).fadeOut(100).fadeIn(100);
  var ad = "sounds/"+randomColorChosen+".mp3";

  var audio = new Audio(ad);
  audio.play();

}
function playSound(name){

  var ad = "sounds/"+ name +".mp3";
  var audio = new Audio(ad);
  audio.play();

}

function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  setTimeout(function (){
    $("."+currentColor).removeClass("pressed");
  }, 100);

}
