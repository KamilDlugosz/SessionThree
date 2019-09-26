function checkValue() {

var text;
var lang = document.getElementById("inputValue").value;

switch(lang) {

  case "JavaScript":
    text = "Yay!";
    break;

  case "HTML":
    text = "OK"
    break;

  case "CSS":
    text = "Right"
    break;

    default:
      text = "You need to enter something!";

  }
  document.getElementById("displayText").innerHTML = text;
}
