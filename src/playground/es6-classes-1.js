class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age}.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Major is: ${this.major}.`;
    }
    return description;
  }
}

//Traveler -> Person
//add support for HomeLocation
//Override getGreeting
//1. Hi. I am Andrew Mead. I'm visiting from Philadelphia.
//2. Hi. I am Andrew Mead.
class Traveler extends Student {
  constructor(name, age, major, homeLocation) {
    super(name, age, major);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasHomeLocation()) {
      description += ` I am visiting from: ${this.homeLocation}.`;
    }
    return description;
  }
}

const run = new Traveler("Gary", 37, "Computer Science", "los angeles");
console.log(run);
console.log(run.getDescription());
console.log(run.hasMajor());
