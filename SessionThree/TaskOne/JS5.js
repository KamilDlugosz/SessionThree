
var day;
switch (new Date().getDay()) {

case 0:
  day = "Sunday, Boo, no college!"
 break;
case 1:
  day = "Monday, Boo, no college!";
break;
case 2:
  day = "Tuesday, Hurray college!";
break;
case 3:
  day = "Wednesday, Hurray college!";
break;
case 4:
  day = "Thrusday, Hurray college!";
break;
case 5:
  day = "Friday, Hurray college!";
break;
case 6:
  day = "Saturday, Boo, no college!";

}
document.getElementById("demo").innerHTML = "Today is " + day;
