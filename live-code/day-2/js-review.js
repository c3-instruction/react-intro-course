// rest vs spread operator (both use ...)

// when in a function parameter formally ... is the *rest* operator

function makeGreetingMoreExciting(greeting) {
  return greeting + '!';
}

function greetGroup(greeting, ...names) { // is a spread in this case
  let results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(`${makeGreetingMoreExciting(greeting)} ${names[i]}`);
  }
  return results;
}
/* longhand way
const results = greetGroup('hello', 'greg','tammy','beth','bob');
const result0 = results[0];
const result1 = results[1];
const result2 = results[2];
const result3 = results[3];
*/
const [result0, result1, result2, result3] = greetGroup('hello', 'greg','tammy','beth','bob');


// do stuff with those results
console.log(result0, result1, result2, result3);