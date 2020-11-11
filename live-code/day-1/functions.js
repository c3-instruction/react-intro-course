function add(x, y) {
  const result = x + y;
  return result;
}
// result is out of scope at this point

const sum = add(2, 4);
console.log(sum);
console.log(add('hello ', 'world'));
// add extra arguments
console.log(add(10, 12, 40)); // console.log(add(10, 12)) // same result
// omit  arguments
console.log(add(10)); // add(10, undefined)
console.log(add('20', 20)); // '2020' as 20 is cast into '20' and string concat follows

// double vs triple equals
// if (x == y) vs if (x === y) loose comparison vs strict comparison. Common suggestion Only use === don't use loose typing

// old way (gross)
function addAllOld(x, y) {
  let sum = 0;
  Object.keys(arguments).forEach(key => {
    sum += arguments[key];
  })
  return sum;
}

console.log(addAllOld(2, 4, 10));

// new way rest args
function addAllNew(...args) {
  let sum = 0;
  // traditional loop
  /*
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  */
 // for in loop
 /*
  for (let num of args) {
    sum += num;
  }
 */

 // functional... my preferred way! more on this later
  args.forEach(function(number) {
    sum += number;
  })

  return sum;
}

addAllNew(4, 10, 29);

/*
   Charlie's string best practices

   default to single quotes for strings ''
   Use template strings over string concat OR if you wanna go over multiple lines
   Only use "" strings for simple strings containing a quote i.e. "This is charlie's class"
*/  
const multiLineString = `I am going
 over the line!`;

// default args must be default from right to left
function greet(name , greeting = 'hello') {
  /*
  if (greeting === undefined) {
    greeting = 'hello';
  }
  */
  //console.log(greeting + ' to ' + name);
  // backticks! (same key as ~ on most keyboards) template strings
  // es6 template strings. Best practice!
  console.log(`${greeting} to ${name}`);
}

greet('beth', 'hello');
greet('jane', 'aloha');
greet('tom'); // default to greet('tom', 'hello');

// defacto named args (actually just an es6 object descture)
function greetNamedArgs({ name, greeting}) {
  /*
  const greeting = args.greeting;
  const name = args.name
  */
  // destructure shortcut
  /*
  const { greeting } = args;
  const { name } = args;
  */
  // two at once
  // const { greetin, name } = args;
  // or get even fancier! do it in the parameters and get kinda sorta named args!

  console.log(`${greeting} to ${name}`);
}

greetNamedArgs({name: 'beth', greeting: 'hello'});
greetNamedArgs({greeting: 'hello', name: 'hello'});


// super common in React!
/*
function userPanel({ user }) {
  return <div>User name is {user}</div>
}
const userPanel = { user } => <div> { user } </div>;
const users = users.map(user => userPanel(user));


*/