const carName1 = prompt("Enter the first car name");
const speed1 = prompt("Enter the first car speed");

const carName2 = prompt("Enter the secund car name");
const speed2 = prompt("Enter the secund car speed");

if (speed1 > speed2) {
  alert(carName1 + " is the most fast");
} else if (speed2 > speed1) {
  alert(carName2 + " is the most fast");
} else {
  alert("We have a Draw");
}
