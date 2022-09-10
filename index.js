

for ( var i = 0; i < document.querySelectorAll("button").length; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function () {
    var buttonName = this.innerHTML;
    buttonAnimation(buttonName);
    makeSound(buttonName);
  })
}
document.addEventListener("keydown",function(event){
  buttonAnimation(event.key);
  makeSound(event.key);
})
function makeSound(buttonName)
{
  switch (buttonName) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    default:
  }
}

function buttonAnimation(key)
{
  var pressedKey = document.querySelector("."+key);
  pressedKey.classList.add("pressed");
  setTimeout(function(){
    pressedKey.classList.remove("pressed");
  },100);
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
