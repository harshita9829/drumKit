// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//   alert("I got clicked");
// }

//Another way is to write the function anonymously
// document.querySelector("button").addEventListener("click", function(){
// alert("I got clicked");});

// for(var i=0; i<7; i++){
//   document.querySelector("button")[i].addEventListener("click",handleClick);
//   function handleClick(){
//     alert("I got clicked");
//   }
//
// }
//Detecting button press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//this.style.color="White";
var drumClass = this.innerHTML;
makeSound(drumClass);
buttonAnimation(drumClass);
});
}

//detecting key press
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

   case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

   case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
    console.log(drumClass);
  }
}

function buttonAnimation(currentKey){
  var buttonPressed = document.querySelector("."+currentKey);
  buttonPressed.classList.add("pressed");
  setTimeout(function() {
    buttonPressed.classList.remove("pressed");
  }, 100);
}
