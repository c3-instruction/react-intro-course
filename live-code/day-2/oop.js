'use strict'; // makes 'this' have a default value of undefined

// caps! For convention only
function Student(name, age, subject) {
  // when called with "new" 'this' is equal to a new empty object "linked" to the constructor function
  // this will be setup different based on if the function is called with new or not
  this.name = name;
  this.age = age;
  this.subject = subject;
  // implicitly adds this as your final line of code
  // return this;
}

Student.prototype.getInfo = function() {
  console.log(`Student info: name ${this.name} age ${this.age} subject ${this.subject}`);
}

const someStudent = new Student('sally', 20, 'math');
// they are the same
console.log(someStudent.__proto__  === Student.prototype);

console.log(someStudent.getName); // undefined


Student.prototype.getName = function() {
  return this.name;
}

console.log(someStudent.getName); // [Function]
someStudent.getName();
someStudent.getName = 'shadowed'
console.log(someStudent.getName); // [Function]

// Probably too powerful for its own good! But FYI and important to know

/*
// object memory ref review
const obj = { name: 'Person McPerson' };
const obj2 = obj;

obj2.age = 50;
console.log(obj === obj2);

// two pointers to one obj
const pointer1 = {};
const pointer2 = pointer1;
console.log(`Point to same thing? ${pointer1 === pointer2}`)

// copy of two different objects
const copy1 = {};
const copy2 = {...copy1};
console.log(`Point to same thing? ${copy1 === copy2}`)
*/

/*
  Monster constructor function

  name, and health properties set via the constructor function

  getHealth method (get the current health)
  dealDamage method will input the amount of damage and return the remaining health

  i.e. if the monster starts with 100 health
  dealDamage(20) => 80

*/
function Monster(name, health) {
  this.name = name;
  this._health = health;
}

Monster.prototype.getHealth = function() {
  return this._health;
}

Monster.prototype.heal = function(amount) {
  this.health += amount
  if (this.health > 100) {
    this.health = 100;
  }
}

Monster.prototype.dealDamage = function(damage) {
  this.health -= damage;
  return this.health;
}

class MonsterClass {
  // implictly 'use strict';
  constructor(name, health) {
    this.name = name;
    this.health = health;

    // You'll see this at the bottom of virtually EVERY react class
    this.getHealth = this.getHealth.bind(this);
    this.dealDamage = this.dealDamage.bind(this);
  }

  getHealth() {
    return this.health;
  }

  dealDamage(damage) {
    this.health -= damage;
  }
}

const mob = new MonsterClass('dragon', 100);
// manually bind
// const getHealth = MonsterClass.prototype.getHealth.bind(mob);
const getHealth = mob.getHealth;
console.log(getHealth());
