var txt = "";
var person = {firstName:"Kamil",
              lastName:"Dlugosz",
              gender:"Male",
              age:17};

var x;
for (x in person) {
  txt += person[x] + " ";
  }

  document.getElementById("displayDetails").innerHTML = txt;
