$( document ).ready(function() {

 var elementsArray = ["water", "earth", "fire", "air"];
      
 $( "a" ).click(function() {
   var randomNum = Math.floor(Math.random() * elementsArray.length);
   
   var randomSelection = elementsArray[randomNum];
   var whatHasBeenClickedOn = $(this);
   var playerChoice = $(whatHasBeenClickedOn).attr('href');
   
playerChoice = playerChoice.replace(/^#?/, "")

// swal("You chose " + playerChoice + " the computer chose " + randomSelection + ".")
    
      
if(playerChoice === 'earth') {
  earthCode(randomSelection);
};
   if(playerChoice === 'water'){
     waterCode(randomSelection);
   };
      
 if(playerChoice === 'air') {  
  airCode(randomSelection);
 };
  if(playerChoice === 'fire') {
    fireCode(randomSelection);
  };
  
  if(playerChoice === randomSelection) {
    sendAlert(playerChoice, randomSelection, "tie", "tiieee... but this is the battle of elements... try again!");

    // alert("tiieee... but this is the battle of elements... try again!");
  }; 
    
function earthCode(randomSelection){
    if(randomSelection === 'water')
      sendAlert(playerChoice, randomSelection, "lose", "To the library! \(to study how to be a better bender\)");

    // alert("To the library! (to study how to be a better bender)")
  if(randomSelection === 'air')
    sendAlert(playerChoice, randomSelection, "win", "You win, now go have a dance party!");

    // alert("You win, now go have a dance party!")
    if(randomSelection === "fire")
    sendAlert(playerChoice, randomSelection, "win", "You win! Time to celebrate on the world's greatest super slide!");

     // alert("You win! Time to celebrate on the world's greatest super slide!")
};
    
    
function waterCode(randomSelection){
  if(randomSelection === 'earth')
    sendAlert(playerChoice, randomSelection, "win", "You win! Isn't water bending the best?");

    // alert("You win! Isn't water bending the best?")
  if(randomSelection === 'air')
    sendAlert(playerChoice, randomSelection, "lose", "If you want to be a bender you have to let go of fear...try again.");

    // alert("If you want to be a bender you have to let go of fear...try again.")
    if(randomSelection === "fire")
      sendAlert(playerChoice, randomSelection, "win", "That wasn't even fair! You win.");

     // alert("That wasn't even fair! You win.")
    };
   
    
 function airCode(randomSelection){
    if(randomSelection === 'water')
      sendAlert(playerChoice, randomSelection, "win", "The power within has led you to vicory!");

    // alert("The power within has led you to vicory!")
  if(randomSelection === 'earth')
      sendAlert(playerChoice, randomSelection, "lose", "secret tuneeellll.... you diiiied x.x");

    // alert("secret tuneeellll.... you diiiied x.x")
  if(randomSelection === "fire")
    sendAlert(playerChoice, randomSelection, "win", "You win! Not it's time to ask yourself- who are you? and what do you want?");
     // alert("You win! Not it's time to ask yourself- who are you? and what do you want?")
      };
  
  function fireCode(randomSelection){
    if(randomSelection === 'water')
      sendAlert(playerChoice, randomSelection, "lose", "That was brutal...dry off and try again");

    // alert("That was brutal...dry off and try again")
  if(randomSelection === 'earth')
    sendAlert(playerChoice, randomSelection, "lose", "That was rough buddy. Try again.");

    // alert("That was rough buddy. Try again.")
      if(randomSelection === "air")
        sendAlert(playerChoice, randomSelection, "win", "You win! Time to celebrate with ginseng tea!");
     // alert("You win! Time to celebrate with ginseng tea!")
    };

  function sendAlert(playerChoice, randomSelection, winLose, message){
    //swal("You chose " + playerChoice + " the computer chose " + randomSelection + "." + " " + message);
    var intro = "You chose " + playerChoice + " the computer chose " + randomSelection + ".";
    if (winLose === "win") {
      swal({   
        title: intro,   
        text: message,   
        type: "success",   
        confirmButtonText: "^_^" 
      });
    } else if(winLose === "lose") {
      swal({   
        title: intro,   
        text: message,   
        type: "error",   
        confirmButtonText: "Try again"
      });

    } else{
      swal({   
        title: intro,   
        text: message,   
        type: "warning",   
        confirmButtonText: "Play again"
      });

    };

  };   
 })
})