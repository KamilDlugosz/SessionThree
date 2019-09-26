function checkValue() {

var text;
var lang = document.getElementById("inputValue").value;

switch(lang) {

  case "Apples":
    text = "Apples are $0.32 a pound.";
    break;

  case "Orenges":
    text = "Oranges are $0.59 a pound."
    break;

  case "Bananas":
    text = "Bananas are $0.48 a pound."
    break;

  case "Cherries":
    text = "Cherries are $3.00 a pound."
    break;

  case "Mangoes":
    text = "Sorry we are out of Mangoes."
    break;

  case "Papayas":
    text = "Papayas are $2.79 a pound.";
    break;

    default:
      text = "You need to enter something!";

  }
  document.getElementById("displayText").innerHTML = text;
}
