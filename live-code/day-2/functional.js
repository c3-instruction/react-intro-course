// using methods like map, filter, reduce
// prefer to clone and update rather than mutate data

// forEach not technically functional but good to know!

const nums = [1, 55, 100, 2];

/*
nums.forEach(function(number, index, array) {
  // forEach cause this function has side effects.
  // console state is not a part of the local function state
  console.log(array);
  console.log(index, number);
})
nums.forEach((number) => {
  console.log(number);
});

// if and only if there is 1 parameter... we can drop the parens
nums.forEach(number => {
  console.log(number);
});
*/

//nums.map().map((num, index, array)).map()
// implicit return! if and only if the function body is just 1 expression
const plus1 = nums.map(number => number + 1);
console.log(plus1);

// functional components often return only 1 thing! 
/*
const UserComponent = () => {
  return (
    React.createElement(
      'div',
      React.createElement('p'),
      React.createElement('p'),
    )
  )
    <div>some user
      <p>stuff</p>
      <p>more stuff</p>
    </div>
  )
}
*/
// can be useful to omit return with functional components (wrap in parens instead of curly brackes though)
/*
const UserComponent = () => (
    <div>
      <p>stuff</p>
      <p>more stuff</p>
    </div>
);
*/

const lessThan50 = nums.filter(number => number < 50).forEach(logger);
console.log(lessThan50);

// don't have to use anon functions
function logger(data) {
  console.log('loggging out:', data);
}


const lessThan50Predicate = number => number < 50;

console.log(nums.filter(lessThan50Predicate));

const strings = ['mary', 'had', 'a', 'little', 'lamb'];

const sentence = strings.reduce((memo, string) => {
  return `${memo} ${string}`;
}, '').trim();
console.log(sentence);

const sum = [1, 5, 10, 29].reduce((total, number) => total + number);
console.log(sum)
