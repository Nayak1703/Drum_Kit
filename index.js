// Which button is Selected

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // console.log(this);         // <button class=​"w drum">​w​</button>​  (owner object)
    // console.log(this.innerHTML) // w
    // this.style.color= "white"; // <button class=​"w drum">​w​</button> (add style to owner object)​
    var keyPressed = this.innerHTML;
    makeSound(keyPressed);
    animateBtn(keyPressed);
  });

}

// Which button is Pressed

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animateBtn(event.key);
  console.log(event);
});

// Assign clicked and pressed button a sound
function makeSound(key) {

  switch (key) {
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
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(this.innerHTML);
  }

}

function animateBtn (currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}







// var audio= new Audio('sounds/snare.mp3');
// audio.play();
