


/* we write this
function main() {
  var x = 4;
  console.log(x);

  if (x) {
    var name = 'sally';
  }

  console.log(name);
}
*/

// compiler sees this
function main() {
  var x, name;
  x = 4;
  console.log(x);

  if (x) {
    name = 'sally';
  }

  console.log(name);
}

// What hoisting *really* is
// functions are executed in 2 passes
// first pass reads the function for variable declarations of (ALL KINDS) build a table of them.
// THen it is going to actually execute the code


main();


// let's rewrite with let
function letMain() {
  let go = true;
  if (go) {
    let name = 'tammy'
  }
  console.log(name);
}

//letMain(); // will throw an error


// const has same scope rules as let
// let's rewrite with const
function constMain() {
  const go = true;
  if (go) {
    const name = 'tammy';
  }
  console.log(name);
}

//constMain(); // will throw an error

// const the *assignment* is immutable
// valid
let someArray =  [];
someArray = ['another', 'array'];
const anotherArray = [];
// not valid
//anotherArray = someArray;

// however! the value const points to *is* mutable
anotherArray.push('new value');
console.log(anotherArray)

function yetAnotherMain() {
  console.log(x); // undefined
  var x = 20;
}

// clearler with hoisting
/*
function yetAnotherMain() {
  var x; // var x = undefined;
  console.log(x); // ?
  x = 20;
}
*/

yetAnotherMain();





function temporalDeadZone() {
  const someObject = {};
  z = 29; // throws error not init
  if (someObject) {
    console.log('it exists')
  }
  let z = 49;
}

// will break due to not initialized Temporal dead zone
// temporalDeadZone();

function temporalDeadZoneHoist() {
  // z is hoisted to dop
  const someObject = {};
  z = 29;
  if (someObject) {
    console.log('it exists')
  }
  let z = 49; // z is intialized here. TDZ ends
}

// varTable = { z: {type: 'let', lineNumber: 114} };

function notDeclare() {
  // var name;
  name = 'shirly';
  console.log(name);
  var name = 'tom';
}

notDeclare();


let company = 'starbucks';
function proofLetHoists() {
  // let company;//  ACTUALLY hoisted. Shadowing our outer company
  console.log(company);

  company = 'intuit';
}

function otherFunction() {
  console.log(company);
}

otherFunction();
proofLetHoists();

// staying inside funcition scope makes life EASIER
// global state is hard to reason about
// variable shadowing is generally a bad idea


// Simple good enough niave explantion
// let/const remove confusing hoist behavior. Variables do not exist until they are delcared 95/100 accurate enough.

/*
  End advice and best practices
  
  NEVER use var in new code (refactor old code that uses var over time)

  default to using const.

  If you must reassing though, use let instead.

  avoid variable shadowing (variables with same name but in different scopes)

  avoid modifying variables not local to the function (not always possible to avoid, but prefer it when you can)

  With these steps you can void most/all of these problems

*/





