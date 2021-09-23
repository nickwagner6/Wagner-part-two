
var petName = prompt("What is your pets name?");
var energy = 0;
var happiness = 0;
for (var i = 0; i < 6; i++
  // i is equal to 0, as long as i is less than 6, run again
)var answer = prompt("feed, pet, walk");
  if (answer == "walk" && energy == 0); {
      alert("Not enough energy to enjoy a walk");
    }
  

  break;

  if (answer == "feed") {
    energy = energy + 2;
    // increase energy by 2
  }
  else if (answer == "pet") {
    happiness = happiness + 1;
    // increase happiness by 1
  }
 else if (answer == "walk") {
    happiness = happiness + 2;
    // increase happiness by 2
    energy = energy - 1;
    // decrease energy by 1
  }

console.log(
  petName + " has " + happiness + " happiness " + " and " + energy + " energy "
);
// console.log(`${petName} happiness is at ${happiness} and their energy level is at ${energy}.`)
