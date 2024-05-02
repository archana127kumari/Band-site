var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);


  });

}



document.addEventListener("keypress", function(event) {

  makeSound(event.key);


});


function makeSound(key) {

  switch (key) {
    case "w":
      var play11 = new Audio("sounds/tom-1.mp3");
      play11.play();
      break;

    case "a":
      var play12 = new Audio("sounds/tom-2.mp3");
      play12.play();
      break;

    case "s":
      var play13 = new Audio('sounds/tom-3.mp3');
      play13.play();
      break;

    case "d":
      var play14 = new Audio('sounds/tom-4.mp3');
      play14.play();
      break;

    case "j":
      var play15 = new Audio('sounds/snare.mp3');
      play15.play();
      break;

    case "k":
      var play16 = new Audio('sounds/crash.mp3');
      play16.play();
      break;

    case "l":
      var play17 = new Audio('sounds/kick-bass.mp3');
      play17.play();
      break;

    default: console.log(key);

  }
}

