// Setup constructor to take name and age(default to 0).
// getDescription - Andrew Mead is 26 year(s) old. (default: 'Anonymous is 0 year(s) old.')
class NameAge {
  constructor(name = "Anonymous", age = "0") {
    this.name = name;
    this.age = age;
  }
  getDescription(name, age) {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

let run = new NameAge("Andrew Mead", "26");
console.log(run.getDescription());

run = new NameAge("Gary");
console.log(run.getDescription());

class Person {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  getGreeting() {
    //return "I am " + this.name + "!";
    return `Hi, I am ${this.name}!`;
  }
}

const me = new Person("Gary Chan");
console.log(me.getGreeting());

const other = new Person("Anonymous");
console.log(other.getGreeting());
