const multiplier = {
  //numbers = array of numbers
  numbers: [2, 4, 6],
  //multiplyBy = single number
  multiplyBy: 2,
  //multiply - return a new array where the number have been multiplied, hint: use map fxn
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply()); //[1,2,3] 2 [2,4,6]

/* const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived()); */
