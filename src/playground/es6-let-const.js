var nameVar = "Andrew";
var nameVar = "Mike";

console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

// Block scoping

const fullName = "Gary Chan";
const firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
