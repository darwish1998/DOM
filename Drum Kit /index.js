var numberOfdrum = document.querySelectorAll(".drum").length;

for (i = 0 ; i<numberOfdrum;  i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

var buttomInnerHTML = this.innerHTML;

switch (this.innerHTML) {
  case 'w':
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

  case 'a':
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

  case 's':
      var s = new Audio('sounds/tom-3.mp3');
      s.play();
      break;
 case 'd':
     var d = new Audio('sounds/tom-4.mp3');
     d.play();
     break;

  case 'j':
     var j = new Audio('sounds/crash.mp3');
     j.play();
     break;

 case 'k':
    var k = new Audio('sounds/kick-bass.mp3');
    k.play();
    break;
case 'l':

  var l = new Audio('sounds/snare.mp3');
  l.play();
  break;

  default:console.log(buttomInnerHTML);

}

});

}
