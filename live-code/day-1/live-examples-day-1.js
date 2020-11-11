// primitive types
// Number
const x = 4;
const y = 4.0;
const z = 10.42;

// String (no char type)
const name = 'barbara';
const firstChar = "b"; // no difference between single and double!

// boolean
const goPast = true;
const doNot = false;

// undefined / null
const someVal = undefined;
const anotherVal = null;

var someVar; // some as `var someVar = undefined`;

// BonusTypes! BigInt and Symbol

// object
const person = { name: 'Sally', job: 'engineer', age: 20, pet: {name: 'sam', variety: 'cat' }};
// dot syntax
person.job = 'senior engineer';
person.employer = 'Starbucks';

person['job'] = 'staff engineer';
// times we need to use []'s (default to dot notation)
// illegal variable names
// dynamic property lookups
const somePropToLookup = 'job';
const personJob = person[somePropToLookup];
// NOT
// const personJob = person.somePropToLookup; => const personJob = person['somePropToLookup'];
const doesNotExist = person.blah; // undefined
person.newProp = true; // works just fine! dynamic
// throw an error! (one of the few things that do) You cannot access properties of undefined
//person.nothing.there = 'hello';
person.nothing = {};
person.nothing.there = 'hello';

// Array (kinda) (Actually lists)...but actually actually Objects
const numbers = [2, 10, 4, 19];
const fruit = ['apple', 'orange', 'cherry'];
const mixedTypes = [8, 'apple', 4, 'cherry'];

// add thigns after the fact
mixedTypes.push('hello');
const mixAndMatch = [{name: 'sam'}, ['nested array', 4], 'hello'];

const arrayLikeObj = {};
arrayLikeObj[0] = 'first val';
arrayLikeObj[1] = 'second valu';

// truthy vs falsy

// booleans in ifs and friends
if (true) {
  console.log('do stuff')
} else {
  console.log('do not do stuff')
}

if (false) {
  console.log('do stuff')
} else {
  console.log('do not do stuff')
}


if (4) {
  console.log('will i log?')
}

if ('hello') {
  console.log('will i log?')
}

const someUser = { userName: 'tammy '};

if (someUser) {
  console.log('will i log?')
}

// all values are truthy or falsy
/*
  false
  0
  undefined
  null
  ''
  NaN
*/

// notably... {} and [] are truthy!
const someObj;
const someProp = someObj.someProp;

// if falsy
if (someProp) {
  console.log(someProp.innerValue);
}

// if literally not defined
if (someProp !== undefined) {

}

if (someObj && someObj.someProp) {
  someObj.someProp.newProp = 'new value';
}

// assign if not defined
// x = x || 2;


